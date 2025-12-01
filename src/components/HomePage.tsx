import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onStart: () => void;
}

export const HomePage = ({ onStart }: HomePageProps) => {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-8">
      {/* Hero Section */}
      <div className="space-y-5 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-sm text-muted-foreground">
          <Sparkles className="w-3 h-3" />
          Inspired by <a href="https://youtu.be/bBC-nXj3Ng4?si=yKF2BEv6V6BqcG1a" className="text-blue-400 hover:text-blue-300" target="_blank"> 3Blue1Brown </a>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Ever wonder how Cryptocurrency actually works?
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-muted-foreground">
            Let's figure it out together.
          </h2>
        </div>
        
        <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          You and your friends keep a shared ledger to track who owes what for pizza and coffee. 
          Simple enough, right? But what happens when someone tries to cheat? Or when you don't 
          trust a central authority? Through solving these problems step-by-step, you'll discover 
          how Bitcoin was born.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="space-y-1.5">
          <div className="text-base font-medium">What You'll Learn</div>
          <p className="text-base text-muted-foreground leading-relaxed">
            We'll walk through digital signatures, proof-of-work, blockchains, and mining. 
            But instead of memorizing definitions, you'll see <em>why</em> each piece exists.
          </p>
        </div>
        
        <div className="space-y-1.5">
          <div className="text-base font-medium">How It Works</div>
          <p className="text-base text-muted-foreground leading-relaxed">
            This is a choose-your-own-adventure style journey. Make decisions, encounter problems, 
            and discover solutions. Some paths lead to dead ends - that's how we learn!
          </p>
        </div>
        
        <div className="space-y-1.5">
          <div className="text-base font-medium">What You'll Need</div>
          <p className="text-base text-muted-foreground leading-relaxed">
            Just basic intuition about money and transactions. We'll gently introduce concepts 
            like cryptography as we go. Takes about 15 minutes.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center gap-3 pt-4">
        <Button
          onClick={onStart}
          size="lg"
          className="group h-12 px-8 bg-white text-black hover:bg-white/90"
        >
          Let's Get Started
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </div>
  );
};