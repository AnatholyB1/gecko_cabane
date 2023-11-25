import { useState } from 'react';
import Layer from '@/layer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

type CookiePreferences = {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
    [key: string]: boolean; // Add index signature
  };
  

export default function Settings() {
  const {toast} = useToast();

  // State to manage cookie preferences
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: true,
    marketing: false,
  });

  // Function to handle changes in cookie preferences
  const handleCookieChange = (type : string) => {
    setCookiePreferences((prevPreferences) => ({
      ...prevPreferences,
      [type]: !prevPreferences[type],
    }));
  };

  // Function to save cookie preferences (you can replace this with your actual cookie management logic)
  const saveCookiePreferences = () => {
    // Add logic to save preferences to cookies or backend
    toast({title: 'Cookie preferences saved'});
    console.log('Cookie preferences saved:', cookiePreferences);
  };

  return (
    <Layer>
      <section className="grid place-items-center grid-flow-row py-[5rem] w-full service-page">
        <div className="max-w-md p-4  rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">Cookie Settings</h1>
          <form>
            <div className="mb-4">
              <input
                type="checkbox"
                id="essential"
                checked={cookiePreferences.essential}
                onChange={() => handleCookieChange('essential')}
              />
              <label htmlFor="essential" className="ml-2">
                Essential Cookies
              </label>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="analytics"
                checked={cookiePreferences.analytics}
                onChange={() => handleCookieChange('analytics')}
              />
              <label htmlFor="analytics" className="ml-2">
                Analytics Cookies
              </label>
            </div>
            <div className="mb-4">
              <input
                type="checkbox"
                id="marketing"
                checked={cookiePreferences.marketing}
                onChange={() => handleCookieChange('marketing')}
              />
              <label htmlFor="marketing" className="ml-2">
                Marketing Cookies
              </label>
            </div>
            <Button
              type="button"
              className="rounded-full  w-full"
              onClick={saveCookiePreferences}
            >
              Save Preferences
            </Button>
          </form>
        </div>
      </section>
    </Layer>
  );
}
