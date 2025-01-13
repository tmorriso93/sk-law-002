
import Image from "next/image";
import AboutImage from '../../assets/images/lawyer0008-no-bg.png'
import BgLogoImage from '../../assets/images/King Law Logo A7.png'

export default function Page() {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-start md:gap-8">
                        <div className="order-2 md:order-1">
                            <div className="max-w-lg md:max-w-none">
                                <h2 className="text-4xl max-sm:text-2xl font-semibold text-gray-800 pb-2 pt-2 uppercase">
                                    Steven King
                                </h2>
                                <h4 className=" font-medium text-lg text-slate-400 uppercase">Principal Lawyer </h4>
                                <p className="font-medium text-slate-700 mt-4">
                                    Steven King is an experienced lawyer based in Oshawa, with a focus on employment and 
                                    human rights law serving all of Ontario.
                                    As a former federal prosecutor, Steven has extensive trial experience. Knowledgeable
                                    and easy to understand, Steven ensures his clients feel heard and informed throughout the legal process.
                                </p>
                                <p className="font-medium text-slate-700 mt-8">
                                    Steven regularly represents workers, senior executives, directors, and professionals in all manner of workplace matters including
                                     but not limited to termination disputes, constructive dismissal, severance and employment contract negotiations. Steven will work
                                      with you to understand your desired outcome and risk appetite to tailor the best approach in achieving your goals.
                                </p>
                                <p className="font-medium text-slate-700 mt-8">
                                    Steven's work with employers is rooted in providing proactive, practical, and holistic business advice, considering all aspects
                                     of your business to deliver comprehensive legal solutions. His pragmatic and proactive approach helps his employer clients navigate the
                                      intricacies of employment law with confidence, ensuring they are well-prepared for any challenges that may arise.
                                </p>
                                
                                <h4 className="underlinetext-xl font-bold mt-10 text-2xl uppercase text-slate-800 hidden"></h4>
                                <div className="px-4 py-8 text-slate-700">
                                    <h1 className="text-2xl font-bold mb-4">Steven's Trial Work:</h1>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li><a href="https://canlii.ca/t/jh6mq" target="_blank" title="Visit " className="text-blue-500">McDonald v. Coelho 2021 ONSC 5238 (CanLII)</a></li>
                                        {/* <li>2021 ONSC 5238 (CanLII)</li>
                                        <a href="https://canlii.ca/t/jh6mq" target="_blank" title="Visit " className="text-blue-500">Click Here</a> */}
                                        {/* <br /> */}
                                        {/* <br /> */}
                                        <li><a href="https://canlii.ca/t/k49z1" target="_blank" title="Visit " className="text-blue-500">Children and Family Services for York Religion V. B.T. and R.S. 2024 ONSC 2179 (CanLII)</a></li>
                                        {/* <li>2024 ONSC 2179 (CanLII)</li>
                                        <a href="https://canlii.ca/t/k49z1" target="_blank" title="Visit " className="text-blue-500">Click Here</a> */}
                                        
                                    </ul>
                                </div>
                                <div className="hidden">
                                <div className="px-4 py-8 text-slate-700">
                                    <h1 className="text-2xl font-bold mb-4">Advocacy Work</h1>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Successfully obtained damages for a long-standing employee terminated for cause</li>
                                        <li>Successfully obtained damages for an employee in the food and service industry at the Human Rights Tribunal of Ontario</li>
                                        <li>Regularly represent engineers, directors and senior managers in termination disputes</li>
                                        <li>Supported a family doctor defend a termination dispute of a long-standing employee centered around a frustration of contract issue</li>
                                        <li>Successfully defend a small business owner on allegations of breach of a non-compete and non-solicitation dispute</li>
                                        <li>Completed a three-week trial in a child protection matter</li>
                                    </ul>
                                </div>
                                </div>
                                <div className="px-4 py-8 text-slate-700 hidden">
                                    <h1 className="text-2xl font-bold mb-6">COMMUNITY SECTION</h1>
                                    <h2 className="text-xl font-semibold mb-2">Community Involvement and Professional Affiliations</h2>
                                    <p className="mb-4">
                                        Steven is deeply committed to his community and enjoys mentoring the next generation. He has served as a member on the Professional Development Committee with the Ontario Bar Association, contributing to the advancement of the legal profession. He also volunteers at his local church in Oshawa as a keyboardist and small group leader mentoring young adults. In his spare time, Steven enjoys staying active through fitness and playing soccer.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2">
                                        <li>Canadian Association of Black Lawyers</li>
                                        <li>Director DSCC 209 Condo Corporation</li>
                                        <li>Braiding Diversity into Justice</li>
                                    </ul>
                                </div>
                                {/* <div className="mt-4">
                                    <p className="text-lg text-slate-700">
                                        <strong>Email:</strong> <a href="mailto:steven@kinglaw.ca">steven@kinglaw.ca</a>
                                    </p>
                                    <p className="text-lg text-slate-700">
                                        <strong>Main Office:</strong> <a href="tel:9053837416">(905)-383-7416</a>
                                    </p>
                                    <p className="text-lg text-slate-700">
                                        <strong>Toronto:</strong> <a href="tel:4379009259">(437)-900-9259</a>
                                    </p>
                                    <p className="text-lg text-slate-700">
                                        <strong>Oshawa:</strong> <a href="tel:2898192272">(289)-819-2272</a>
                                    </p>
                                   
                                </div> */}
                            </div>
                        </div>
                        <div className="order-1 md:order-2 md:flex md:justify-end">
                        <div className="flex flex-col items-center md:items-start ">
                            <Image
                                src={AboutImage}
                                className="rounded"
                                id="aboutImage"
                                alt="About Image"
                            />
                             <div className="mt-4  flex flex-col mx-auto py-8  md:justify-end" id='contact-info'>
                                    <div>
                                    <p className="text-lg text-slate-700">
                                        <strong>Email:</strong> <a href="mailto:steven@kinglaw.ca">steven@kinglaw.ca</a>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-lg text-slate-700">
                                        <strong>Main Office:</strong> <a href="tel:9053837416">(905)-383-7416</a>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-lg text-slate-700">
                                        <strong>Toronto:</strong> <a href="tel:4379009259">(437)-900-9259</a>
                                    </p>
                                    </div>
                                    <div>
                                    <p className="text-lg text-slate-700">
                                        <strong>Oshawa:</strong> <a href="tel:2898192272">(289)-819-2272</a>
                                    </p>
                                    </div>
                                   </div>
                                </div>
                        </div>
                        
                       
                    </div>
                    <div className="flex justify-center mt-8">
                        <Image
                            src={BgLogoImage}
                            alt="Logo"
                            layout="intrinsic"
                            width={300}
                            height={300}
                            className="w-[300px]"
                        />
                    </div>
                    <div className="flex flex-col items-center md:flex-row justify-center text-slate-800 text-2xl font-bold space-y-4 md:space-y-0 md:space-x-4 z-10">
                        <div className="px-4">INTEGRITY</div>
                        <div className="px-4 hidden md:inline">|</div>
                        <div className="px-4">DEDICATION</div>
                        <div className="px-4 hidden md:inline">|</div>
                        <div className="px-4">PRACTICAL</div>
                    </div>
                </div>
            </section>
        </div>
    )
}