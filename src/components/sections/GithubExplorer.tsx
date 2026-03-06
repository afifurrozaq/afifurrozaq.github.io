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

export const GithubExplorer: React.FC = () => {
  const [username, setUsername] = useState("afifurrozaq");
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async (userToFetch: string) => {
    if (!userToFetch) return;
    setLoading(true);
    setError(null);
    try {
      const userRes = await fetch(`https://api.github.com/users/${userToFetch}`);
      if (!userRes.ok) throw new Error("User not found");
      const userData = await userRes.json();
      setUser(userData);

      const reposRes = await fetch(`https://api.github.com/users/${userToFetch}/repos?sort=updated&per_page=6`);
      if (!reposRes.ok) throw new Error("Failed to fetch repositories");
      const reposData = await reposRes.json();
      setRepos(reposData);
    } catch (err: any) {
      setError(err.message);
      setUser(null);
      setRepos([]);
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
    <div className="bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 md:p-10 transition-colors">
      <div className="flex flex-col gap-10">
        {/* Search Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
              <Github className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
              GitHub Explorer
            </h3>
            <p className="text-zinc-500 dark:text-zinc-500 text-sm">
              Live preview of GitHub profiles and open-source contributions.
            </p>
          </div>
          <form onSubmit={handleSearch} className="relative group max-w-md w-full">
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Search GitHub username..."
              className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl py-4 pl-12 pr-4 text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
            <button 
              type="submit"
              disabled={loading}
              className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-xl transition-all disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Explore"}
            </button>
          </form>
        </div>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl flex items-center gap-3 text-red-600 dark:text-red-400 text-sm">
            <AlertCircle className="w-5 h-5" />
            {error}
          </div>
        )}

        {user && (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Profile Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="p-8 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-indigo-500 blur-2xl opacity-20 rounded-full" />
                    <img 
                      src={user.avatar_url} 
                      alt={user.login} 
                      loading="lazy"
                      className="w-32 h-32 rounded-full border-4 border-white dark:border-zinc-900 shadow-xl relative z-10"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{user.name || user.login}</h4>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-mono mb-4">@{user.login}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-6 leading-relaxed">
                    {user.bio || "No bio available"}
                  </p>
                  <div className="grid grid-cols-3 gap-4 w-full pt-6 border-t border-zinc-100 dark:border-zinc-900">
                    <div className="text-center">
                      <p className="text-lg font-bold text-zinc-900 dark:text-white">{user.public_repos}</p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Repos</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-zinc-900 dark:text-white">{user.followers}</p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Followers</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-zinc-900 dark:text-white">{user.following}</p>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">Following</p>
                    </div>
                  </div>
                </div>
                <a 
                  href={user.html_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-8 w-full py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  <Github className="w-4 h-4" />
                  View Profile
                </a>
              </div>
            </div>

            {/* Repositories Grid */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h5 className="text-lg font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-indigo-500" />
                  Recent Repositories
                </h5>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {repos.map((repo) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4 }}
                    className="p-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl hover:border-indigo-500/50 transition-all group shadow-sm"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h6 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate pr-2">
                        {repo.name}
                      </h6>
                      <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-500 transition-colors flex-shrink-0" />
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-500 line-clamp-2 mb-6 h-8">
                      {repo.description || "No description provided."}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                          <Star className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                          {repo.stargazers_count}
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                          <GitFork className="w-4 h-4 text-indigo-500" />
                          {repo.forks_count}
                        </div>
                      </div>
                      {repo.language && (
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-indigo-500" />
                          <span className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
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
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4">
            <div className="w-20 h-20 bg-zinc-100 dark:bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
              <Github className="w-10 h-10 text-zinc-300 dark:text-zinc-700" />
            </div>
            <div className="space-y-1">
              <p className="text-zinc-900 dark:text-white font-bold">Search for a GitHub User</p>
              <p className="text-zinc-500 dark:text-zinc-500 text-sm max-w-xs">
                Enter a username above to explore their profile and recent open-source projects.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
