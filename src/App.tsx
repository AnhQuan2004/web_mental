import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import FormQuestionnaire from "./pages/FormQuestionnaire";
import AIAssistant from "./pages/AIAssistant";
import Expert from "./pages/Expert";
import UserChat from "./pages/UserChat";
import ExpertProfile from "./pages/ExpertProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ExpertRegister from "./pages/ExpertRegister";
import UserProfile from "./pages/UserProfile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/questionnaire" element={<FormQuestionnaire />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/expert" element={<Expert />} />
            <Route path="/chat" element={<Expert />} />
            <Route path="/expert-profile" element={<ExpertProfile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/expert-register" element={<ExpertRegister />} />
            <Route path="/profile" element={<UserProfile />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
