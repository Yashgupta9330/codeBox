import { motion } from 'framer-motion';
import { Code2, FileQuestion, Cpu, Focus, Bot, ArrowRight } from 'lucide-react';
import { content } from '../lib/content';
import ModeToggle from '@/components/ModeToggle';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <ModeToggle />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-32 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {content.hero.subtitle}
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {content.hero.description}
          </p>
          <Link
            to="/problems"
            className="bg-primary hover:scale-110 transition-all ease-linear text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            Get Started <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Mac-style Frame with Product Screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card/50 backdrop-blur-xl rounded-xl p-4 shadow-[0_0_50px_rgba(0,0,0,0.1)] dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] border border-border/50 transition-all hover:shadow-[0_0_80px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_80px_rgba(255,255,255,0.08)]">
            {/* Mac-style Window Controls */}
            <div className="flex gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-destructive"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            {/* Code Editor Preview */}
            <div className="bg-background/80 rounded-lg p-4 font-mono text-sm">
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Code2 size={16} />
                <span>main.tsx</span>
              </div>
              <pre className="text-primary">
                  <code>
                    {`function quickSort(arr: number[]): number[] {
                      if (arr.length <= 1) return arr;
                      
                      const pivot = arr[0];
                      const left = arr.filter((x, i) => 
                        i > 0 && x < pivot
                      );
                      const right = arr.filter(x => x >= pivot);
                      
                      return [...quickSort(left), pivot, ...quickSort(right)];
                    }`}
                  </code>
              </pre>
              {/* Animated Cursor */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-2 h-4 bg-primary inline-block"
              ></motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="backdrop-blur-sm py-24 relative">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Bento Grid Layout */}
          <div className="grid gap-8">
            {/* Main Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="text-primary" size={24} />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{content.features[0].title}</h3>
              <p className="text-muted-foreground mb-6">{content.features[0].description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 text-primary px-6 py-2 rounded-lg text-sm font-semibold inline-flex items-center gap-2 w-fit"
              >
                Learn More <ArrowRight size={16} />
              </motion.button>
            </motion.div>

            {/* Interview Features Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all group h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileQuestion className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.features[1].title}</h3>
                <p className="text-muted-foreground">{content.features[1].description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all group h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Bot className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.features[4].title}</h3>
                <p className="text-muted-foreground">{content.features[4].description}</p>
              </motion.div>
            </div>

            {/* Execution and Strict Mode Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all group h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.features[2].title}</h3>
                <p className="text-muted-foreground">{content.features[2].description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all group h-full"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Focus className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{content.features[3].title}</h3>
                <p className="text-muted-foreground">{content.features[3].description}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-24 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {content.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            {content.cta.description}
          </p>
          <Link to={"/problems"}
            className="bg-primary hover:scale-110 transition-all ease-linear text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold inline-flex items-center gap-2 shadow-lg"
          >
            Try it Free <ArrowRight size={20} />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}

export default Home;