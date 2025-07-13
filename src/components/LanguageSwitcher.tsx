
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Languages } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 px-3 py-2"
        >
          <Languages className="w-4 h-4 text-gray-600" />
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-24">
        <DropdownMenuItem
          disabled
          className="cursor-not-allowed text-gray-400 opacity-50"
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage('vi')}
          className={`cursor-pointer ${
            language === 'vi' 
              ? 'bg-blue-50 text-blue-600 font-medium' 
              : 'text-gray-600'
          }`}
        >
          VI
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
