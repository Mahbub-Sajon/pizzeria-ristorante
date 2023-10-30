const SectionTitle = ({heading, subHeading, Style}) => {
    return (
        <div className="text-center">
            <p className={`text-[#D99904] text-xl ${Style}`}>{heading}</p>
            <h1 className={`border-y-4 border-gray-300 border-x-0 text-4xl text-black w-1/4 mx-auto py-2 my-4 ${Style}`}>{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;