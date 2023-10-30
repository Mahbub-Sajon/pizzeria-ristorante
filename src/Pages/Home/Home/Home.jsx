import SectionTitle from "../../../Components/Shared/SectionTitle/SectionTitle";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner/>
            <SectionTitle 
            heading={'---From 11:00am to 10:00pm---'}
            subHeading={'ORDER ONLINE'}
            // Style={'text-red-700'}
            />
        </div>
    );
};

export default Home;