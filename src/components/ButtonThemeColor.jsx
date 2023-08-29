import { useEffect, useState } from "react";

const ButtonThemeColor = () => {

  const [theme, setTheme] = useState('light')
  

  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  };

  useEffect(() => {
    setTimeout(() => { if (theme === 'light') {
      document.documentElement.classList.add("dark");
        setTheme('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove("dark");
        setTheme('light');
        localStorage.theme = "light";
      }
    }, 10)
  }, [])


  function switchTheme() {
    if(theme === 'light') {
      document.documentElement.classList.add("dark");
      setTheme('dark')
      localStorage.theme = 'dark';
      return;
    } else if (theme === 'dark') {
      document.documentElement.classList.remove("dark");
      setTheme('light')
      localStorage.theme = "light";
      return;
    }
  };


  return (
    <button onClick={switchTheme} className="flex items-center justify-center w-16 h-16 border border-gray-300 dark:border-zinc-800 rounded-full hover:bg-gray-300 dark:hover:bg-zinc-700">
      {theme === 'dark' ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
        <path d="M13 18.3333C14.4145 18.3333 15.7711 17.7714 16.7713 16.7712C17.7715 15.771 18.3334 14.4145 18.3334 13C18.3334 11.5855 17.7715 10.2289 16.7713 9.22875C15.7711 8.22856 14.4145 7.66666 13 7.66666C11.5855 7.66666 10.229 8.22856 9.22878 9.22875C8.22859 10.2289 7.66669 11.5855 7.66669 13C7.66669 14.4145 8.22859 15.771 9.22878 16.7712C10.229 17.7714 11.5855 18.3333 13 18.3333Z" stroke="url(#paint0_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 1V2.33333" stroke="url(#paint1_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 23.6667V25" stroke="url(#paint2_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 13H2.33333" stroke="url(#paint3_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M23.6667 13H25" stroke="url(#paint4_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21.4853 4.51465L20.5427 5.45731" stroke="url(#paint5_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.45731 20.5426L4.51465 21.4853" stroke="url(#paint6_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.51465 4.51465L5.45731 5.45731" stroke="url(#paint7_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20.5427 20.5426L21.4853 21.4853" stroke="url(#paint8_linear_2_696)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_2_696" x1="13" y1="7.66666" x2="13" y2="18.3333" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2_696" x1="13.5" y1="1" x2="13.5" y2="2.33333" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_2_696" x1="13.5" y1="23.6667" x2="13.5" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint3_linear_2_696" x1="1.66667" y1="13" x2="1.66667" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint4_linear_2_696" x1="24.3334" y1="13" x2="24.3334" y2="14" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint5_linear_2_696" x1="21.014" y1="4.51465" x2="21.014" y2="5.45731" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint6_linear_2_696" x1="4.98598" y1="20.5426" x2="4.98598" y2="21.4853" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint7_linear_2_696" x1="4.98598" y1="4.51465" x2="4.98598" y2="5.45731" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        <linearGradient id="paint8_linear_2_696" x1="21.014" y1="20.5426" x2="21.014" y2="21.4853" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ED0E98"/>
        <stop offset="1" stopColor="#FE5A2D"/>
        </linearGradient>
        </defs>
      </svg>
      ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1C8.81342 2.19491 8.14882 3.81141 8.15176 5.49539C8.15471 7.17936 8.82497 8.79353 10.0157 9.98428C11.2065 11.175 12.8206 11.8453 14.5046 11.8482C16.1886 11.8512 17.8051 11.1866 19 10C19 11.78 18.4722 13.5201 17.4832 15.0001C16.4943 16.4802 15.0887 17.6337 13.4442 18.3149C11.7996 18.9961 9.99002 19.1743 8.24419 18.8271C6.49836 18.4798 4.89472 17.6226 3.63604 16.364C2.37737 15.1053 1.5202 13.5016 1.17294 11.7558C0.82567 10.01 1.0039 8.20038 1.68509 6.55585C2.36628 4.91131 3.51983 3.50571 4.99987 2.51677C6.47991 1.52784 8.21997 1 10 1Z" stroke="url(#paint0_linear_2_590)" strokeWidth="2" strokeLinejoin="round"/>
        <defs>
          <linearGradient id="paint0_linear_2_590" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ED0E98"/>
            <stop offset="1" stopColor="#FE5A2D"/>
          </linearGradient>
        </defs>
      </svg>
      )
      }
    </button>
  )
}

export default ButtonThemeColor;

