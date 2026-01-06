import { motion } from "framer-motion";

export const Greeting = () => {
  return (
    <div
      className="mx-auto mt-4 flex size-full max-w-3xl flex-col justify-center px-4 md:mt-16 md:px-8"
      key="overview"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-center"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.3 }}
      >
        <div className="text-6xl mb-4">🤖</div>
      </motion.div>
      
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="font-bold text-2xl md:text-4xl text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.5 }}
      >
        Welcome to Vic AI
      </motion.div>
      
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 text-center mt-2"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.6 }}
      >
        Your Ultimate AI Assistant
      </motion.div>
      
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="text-base md:text-lg text-zinc-500 dark:text-zinc-500 text-center mt-4 max-w-2xl mx-auto"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.7 }}
      >
        I can code applications from scratch, debug complex issues, build APIs, create databases, 
        write tests, and handle any development task you need. Just tell me what you want to build!
      </motion.div>
      
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-wrap justify-center gap-2 mt-6 text-sm"
        exit={{ opacity: 0, y: 10 }}
        initial={{ opacity: 0, y: 10 }}
        transition={{ delay: 0.8 }}
      >
        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
          💻 Full-Stack Development
        </span>
        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full">
          🚀 Project Generation
        </span>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
          🔧 Bug Fixing
        </span>
        <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded-full">
          🧪 Testing & QA
        </span>
      </motion.div>
    </div>
  );
};
