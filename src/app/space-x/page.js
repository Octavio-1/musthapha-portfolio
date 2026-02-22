import Image from "@/components/BasePathImage"

const page = () => {
    return (
        <>
            <div className="w-full flex  flex-col items-center bg-[#0c0c0c] md:px-32 px-5 pt-40">
                <h1 className="text-white font-[Sahonme-d] md:text-[64px] md:leading-[70px]  text-3xl font-semibold">IBM Data Science Capstone Project: SpaceX Launch Analysis</h1>
                <Image src="/s.jpg" width={500} height={400} className="md:w-[calc(100vw - 400px)] rounded-2xl w-full h-full py-16 md:px-40 px-10"></Image>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Overview</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                    The capstone project for the IBM Data Science Professional Certificate focuses on a comprehensive analysis of SpaceX launches. The aim is to apply data science techniques to extract meaningful insights from launch data, which may include launch success rates, payload capacities, launch locations, and cost efficiencies.
                </p>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Objectives</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Data Collection: Compile launch data from SpaceX, including launch dates, payloads, launch sites, orbit types, customer sectors, launch outcomes, and booster landing successes.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Data Wrangling: Clean and preprocess the data to facilitate analysis, handling missing values, outliers, and categorical data as needed.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Exploratory Data Analysis (EDA): Conduct a thorough analysis to understand patterns and trends in the launch data, utilizing visualizations such as time series, bar charts, and pie charts.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Statistical Analysis: Apply statistical methods to assess correlations and significances between launch outcomes and various factors.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Predictive Modeling: Develop predictive models to forecast launch success probabilities based on historical data, using algorithms like logistic regression, decision trees, or random forests.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Cost Analysis: Estimate the cost effectiveness of SpaceX launches compared to competitors and analyze the impact of reusability on launch costs.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Booster Landing Analysis: Evaluate the success rate of booster landings and its correlation with launch success and overall mission costs.
                    </li>

                </ul>

            </div>


            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Deliverables</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Data Collection Scripts: Scripts used to gather and compile the launch data from various sources.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Cleaned Dataset: The preprocessed dataset ready for analysis.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Analytical Report: A detailed report documenting the EDA findings, with visualizations and statistical tests.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Predictive Models: Developed models with validation results and metrics demonstrating their performance.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Cost Benefit Analysis: A report on the cost analysis of SpaceX launches, including the impact of reusable components.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Presentation Slides: A slide deck summarizing key findings and recommendations for potential SpaceX improvements.
                    </li>
                </ul>
            </div>

            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Tools and Technologies used</h1>
                <ul className="tex-white list-disc flex flex-col gap-5 pl-5">
                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Python: For data collection, cleaning, analysis, and modeling.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Jupyter Notebooks: For documenting the analysis process and findings.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Pandas and NumPy: For data manipulation.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Matplotlib and Seaborn: For creating visualizations.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        Scikitlearn: For building predictive models.
                    </li>

                    <li className="font-[Sahonme-Leicht] text-lg text-white">
                        IBM Watson Studio: For a cloudbased analysis environment.
                    </li>
                </ul>
            </div>


            <div className="bg-[#0c0c0c] md:px-32 px-5 flex flex-col gap-5 pb-20">
                <h1 className="text-white opacity-[.4] font-[Sahonme-Buch] text-3xl">Development Process</h1>
                <p className="font-[Sahonme-Leicht] text-lg text-white">
                    Through this capstone project, I gained valuable insights into the factors influencing SpaceX launch successes and failures. The analysis enabled me to understand better the economics of space launches and predict future mission outcomes. These insights could be instrumental for stakeholders to make informed decisions about investments, partnerships, and technological advancements within the space industry. The final project was submitted in the form of a GitHub repository containing all code, datasets, reports, and presentation materials.
                </p>
            </div>
        </>
    )
}

export default page

