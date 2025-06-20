
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const HeroSection = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-in">
          <div className="space-y-4">
            <p className="text-orange-400 font-medium text-lg">WE TELL YOU</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              When to <span className="gradient-text">Buy</span>
            </h1>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              When to <span className="text-cyan-400">Exit</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Over fundamentally strong companies using AI-powered predictive models and years of back-tested algorithms.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-semibold"
          >
            Register for Free
          </Button>
        </div>

        {/* Right Auth Form */}
        <div className="animate-fade-in">
          <Card className="neomorphic-card max-w-md mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Get Started</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={isLogin ? "login" : "register"} className="w-full">
                <TabsList className="grid w-full grid-cols-2 bg-slate-700/50">
                  <TabsTrigger 
                    value="login" 
                    onClick={() => setIsLogin(true)}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                  >
                    Login
                  </TabsTrigger>
                  <TabsTrigger 
                    value="register" 
                    onClick={() => setIsLogin(false)}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-purple-600"
                  >
                    Register
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="login" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-gray-300">Email</Label>
                    <Input 
                      id="login-email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-gray-300">Password</Label>
                    <Input 
                      id="login-password" 
                      type="password" 
                      placeholder="Enter your password"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                    Sign In
                  </Button>
                </TabsContent>
                
                <TabsContent value="register" className="space-y-4 mt-6">
                  <div className="space-y-2">
                    <Label htmlFor="register-name" className="text-gray-300">Full Name</Label>
                    <Input 
                      id="register-name" 
                      type="text" 
                      placeholder="Enter your full name"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-email" className="text-gray-300">Email</Label>
                    <Input 
                      id="register-email" 
                      type="email" 
                      placeholder="Enter your email"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="register-password" className="text-gray-300">Password</Label>
                    <Input 
                      id="register-password" 
                      type="password" 
                      placeholder="Create a password"
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700">
                    Create Account
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
