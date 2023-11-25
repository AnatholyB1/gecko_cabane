import { Button } from "@/components/ui/button";
import Layer from "@/layer";
import { Link } from "react-router-dom";

function Privacypolicy() {
    return (
        <Layer>
            <section className="grid  grid-flow-row w-full h-auto place-items-center  py-[5rem] px-5">
            <div className="font-sans ">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Gecko Cabane Restaurant Web App</h1>
        <h2 className="text-2xl font-bold mb-2">Privacy Policy</h2>

        <p className="mb-4">This Privacy Policy describes how Gecko Cabane Restaurant ("we" or "us") collects, uses, and shares information when you use our web app ("the App").</p>

        <p className="mb-4"><strong>1. Information We Collect</strong></p>
        <p className="mb-4">1.1 <strong>Personal Information:</strong> We may collect personal information, such as your name and email address, when you create an account or contact us.</p>
        <p className="mb-4">1.2 <strong>Usage Information:</strong> We may collect information about how you use the App, including your preferences and interactions with the features.</p>

        <p className="mb-4"><strong>2. How We Use Your Information</strong></p>
        <p className="mb-4">2.1 <strong>Provide and Improve the App:</strong> We use the collected information to provide and improve the functionality of the App.</p>
        <p className="mb-4">2.2 <strong>Communicate with You:</strong> We may use your contact information to communicate with you about updates, promotions, or important notices.</p>

        <p className="mb-4"><strong>3. Cookies</strong></p>
        <p className="mb-4">3.1 <strong>What are Cookies:</strong> Cookies are small pieces of data stored on your device that help us improve your experience on the App.</p>
        <p className="mb-4">3.2 <strong>How We Use Cookies:</strong> We use cookies to remember your theme color preferences and analyze usage patterns.</p>

        <p className="mb-4"><strong>4. Information Sharing</strong></p>
        <p className="mb-4">4.1 <strong>Third-Party Services:</strong> We may share information with third-party services, such as Google Maps for mapping services.</p>
        <p className="mb-4">4.2 <strong>Legal Compliance:</strong> We may disclose information if required by law or in response to a legal request.</p>

        <p className="mb-4"><strong>5. Your Choices</strong></p>
        <p className="mb-4">5.1 <strong>Account Information:</strong> You can update or delete your account information through the App's settings.</p>
        <p className="mb-4">5.2 <strong>Cookie Preferences:</strong> You can manage your cookie preferences through the App's settings.</p>

        <p className="mb-4"><strong>6. Changes to This Privacy Policy</strong></p>
        <p className="mb-4">We may update this Privacy Policy to reflect changes in our practices. We will notify you of any significant changes through the App.</p>

        <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:geckocabanerestaurant@gmail.com" >geckocabanerestaurant@gmail.com</a>.</p>
      </div>
    </div>
       
        <Button className="rounded-full"><Link  to='/'>Go to main page</Link></Button>
            </section>
        </Layer>
    );
}

export default Privacypolicy;