import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Search, 
  Loader2, 
  AlertCircle, 
  BookOpen, 
  ExternalLink, 
  Star, 
  GitFork 
} from 'lucide-react';
import { GithubUser, GithubRepo } from '../../types';
import { PROFILE } from '../../constants';

export const GithubExplorer: React.FC = () => {
  // Extract username from PROFILE.social.github URL
  const defaultUsername = PROFILE.social.github.split('/').filter(Boolean).pop() || "afifurrozaq";
  
  const [username, setUsername] = useState(defaultUsername);
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const githubHeaders = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'User-Agent': 'Mozilla/5.0',
  };

  const getCachedData = (key: string) => {
    if (typeof window === 'undefined') return null;

    try {
      const cached = window.sessionStorage.getItem(key);
      if (!cached) return null;

      const parsed = JSON.parse(cached) as { user: GithubUser; repos: GithubRepo[]; timestamp: number };
      const isFresh = Date.now() - parsed.timestamp < 1000 * 60 * 60 * 3;
      return isFresh ? parsed : null;
    } catch {
      return null;
    }
  };

  const setCachedData = (key: string, userData: GithubUser, reposData: GithubRepo[]) => {
    if (typeof window === 'undefined') return;

    try {
      window.sessionStorage.setItem(key, JSON.stringify({
        user: userData,
        repos: reposData,
        timestamp: Date.now(),
      }));
    } catch {
      // Ignore storage failures.
    }
  };

  const fetchData = async (userToFetch: string) => {
    const normalizedUsername = userToFetch.trim();
    if (!normalizedUsername) return;

    const cacheKey = `github-explorer:${normalizedUsername.toLowerCase()}`;
    const cached = getCachedData(cacheKey);

    if (cached) {
      setUser(cached.user);
      setRepos(cached.repos);
      setError(null);
      setNotice('Showing cached GitHub data while the API is rate-limited.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setNotice(null);

    try {
      const userRes = await fetch(`https://api.github.com/users/${normalizedUsername}`, {
        headers: githubHeaders,
      });
      
      if (userRes.status === 403 || userRes.status === 429) {
        throw new Error('GitHub is temporarily rate-limiting requests. Please try again later.');
      }
      
      if (userRes.status === 404) {
        throw new Error(`User "${normalizedUsername}" not found on GitHub.`);
      }

      if (!userRes.ok) {
        throw new Error(`Failed to fetch user data (Error ${userRes.status})`);
      }

      const userData = await userRes.json();
      setUser(userData);

      const reposRes = await fetch(`https://api.github.com/users/${normalizedUsername}/repos?sort=updated&per_page=6`, {
        headers: githubHeaders,
      });

      if (reposRes.status === 403 || reposRes.status === 429) {
        throw new Error('GitHub is temporarily rate-limiting requests. Please try again later.');
      }

      if (!reposRes.ok) throw new Error('Failed to fetch repositories.');
      
      const reposData = await reposRes.json();
      setRepos(reposData);
      setCachedData(cacheKey, userData, reposData);
    } catch (err: any) {
      setError(err.message);
      setUser(null);
      setRepos([]);
      setNotice('GitHub is temporarily rate-limiting requests. Try again in a few minutes.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(username);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData(username);
  };

  return (
    <div className="space-y-12 transition-colors">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mx-auto lg:mx-0">
            Open Source
          </div>
          <h3 className="text-3xl md:text-5xl font-black text-zinc-900 dark:text-white tracking-tight">
            GitHub <span className="text-indigo-600 dark:text-indigo-500">Explorer</span>
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg max-w-xl font-medium mx-auto lg:mx-0">
            A real-time window into my active repositories and coding contributions.
          </p>
        </div>
        
        <form onSubmit={handleSearch} className="relative group w-full lg:max-w-md">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur opacity-10 group-focus-within:opacity-20 transition-opacity" />
          <div className="relative">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter GitHub username..."
              className="w-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-32 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm font-medium"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-xs font-black rounded-xl transition-all disabled:opacity-50 hover:opacity-90"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "EXPLORE"}
            </button>
          </div>
        </form>
      </div>

      {(error || notice) && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-amber-500/5 border border-amber-500/10 rounded-3xl flex items-center gap-4 text-amber-600 dark:text-amber-400 text-sm font-medium"
        >
          <div className="w-10 h-10 rounded-2xl bg-amber-500/10 flex items-center justify-center shrink-0">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="font-black text-base mb-0.5">{error ? 'Something went wrong' : 'GitHub preview is temporarily unavailable'}</p>
            <p className="opacity-80">{error || notice}</p>
          </div>
        </motion.div>
      )}

      {user && (
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[40px] shadow-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="absolute -inset-4 bg-indigo-500 blur-2xl opacity-10 rounded-full" />
                  <img 
                    src={user.avatar_url} 
                    alt={user.login} 
                    loading="lazy"
                    className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-800 shadow-2xl relative z-10 transition-transform group-hover:scale-105 duration-500"
                  />
                </div>
                
                <h4 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tight">{user.name || user.login}</h4>
                <p className="text-sm text-indigo-600 dark:text-indigo-400 font-black tracking-widest uppercase mt-1 mb-6">@{user.login}</p>
                
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-8 leading-relaxed font-medium px-4">
                  {user.bio || "Crafting digital experiences through open source contribution."}
                </p>
                
                <div className="grid grid-cols-3 gap-2 w-full pt-8 border-t border-zinc-100 dark:border-zinc-800">
                  {[
                    { label: "Repos", value: user.public_repos },
                    { label: "Followers", value: user.followers },
                    { label: "Following", value: user.following }
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-xl font-black text-zinc-900 dark:text-white">{stat.value}</p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <a 
                href={user.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-8 w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-2xl text-sm font-black flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg"
              >
                <Github className="w-4 h-4" />
                VISIT PROFILE
              </a>
            </div>
          </div>

          {/* Repositories Grid */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center justify-between px-2">
              <h5 className="text-xl font-black text-zinc-900 dark:text-white flex items-center gap-3">
                <div className="p-2 bg-indigo-500/10 rounded-xl">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                </div>
                Recent Repositories
              </h5>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {repos.map((repo) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -6 }}
                  className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[32px] hover:border-indigo-500/30 transition-all group shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between min-h-[180px]"
                >
                  <div>
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <h6 className="font-black text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                        {repo.name}
                      </h6>
                      <div className="p-2 bg-zinc-50 dark:bg-zinc-800/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="w-4 h-4 text-indigo-500" />
                      </div>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-6 font-medium leading-relaxed">
                      {repo.description || "No description provided for this repository."}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-50 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-xs font-black text-zinc-600 dark:text-zinc-400">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        {repo.stargazers_count}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-black text-zinc-600 dark:text-zinc-400">
                        <GitFork className="w-4 h-4 text-indigo-500" />
                        {repo.forks_count}
                      </div>
                    </div>
                    {repo.language && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-indigo-500/5 rounded-full border border-indigo-500/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                        <span className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                          {repo.language}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}

      {!user && !loading && !error && (
        <div className="py-24 flex flex-col items-center justify-center text-center space-y-6">
          <div className="relative">
            <div className="absolute -inset-8 bg-indigo-500/10 blur-3xl rounded-full" />
            <div className="w-24 h-24 bg-white dark:bg-zinc-900 rounded-[32px] flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-xl relative">
              <Github className="w-12 h-12 text-zinc-200 dark:text-zinc-800" />
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-xl font-black text-zinc-900 dark:text-white tracking-tight">Search for a profile</p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs mx-auto font-medium">
              Enter any GitHub username above to discover their technical profile and recent projects.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
