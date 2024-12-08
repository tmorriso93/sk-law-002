

// import Image from 'next/image';

import Image from "next/image";
// import AboutImage from '../../assets/images/lawyer0008-no-bg.png'
import AboutImage from '../../assets/images/lawyer0008-no-bg.png'
import BgLogoImage from '../../assets/images/King Law Logo A7.png'

export default async function Page() {
    
    
    return (
        <div >
        {/* <h1 className="text-4xl font-bold mb-4">About Page</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aperiam eveniet veniam minima eligendi ipsa praesentium 
            consequatur culpa, ab autem pariatur harum assumenda facere voluptatem odit id ratione. Accusantium asperiores expedita quo! Voluptate cum 
            reprehenderit non. Odit suscipit libero ex perferendis at ipsam voluptatibus voluptates facilis, distinctio laboriosam consequuntur provident,
             nostrum esse iusto deleniti corrupti voluptas magnam in nam! Obcaecati cupiditate consectetur vitae, blanditiis velit id perspiciatis odit 
             voluptatibus accusantium quod enim pariatur at ratione nam, saepe ipsam laudantium non? Adipisci, quibusdam. Voluptatibus, nobis sapiente 
             unde aspernatur debitis modi aut iusto, delectus ipsa placeat molestias itaque veritatis culpa architecto ut corrupti exercitationem ipsam
              cum. Nesciunt illum ab inventore rem, perferendis ducimus aspernatur explicabo, est eligendi ut consequuntur cumque ipsum accusantium.
              </p> */}

<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-4xl max-sm:text-2xl font-semibold text-gray-800 pb-2 uppercase">
          Principal Lawyer Steven King
          </h2>

          {/* <h3 className="font-medium mt-2 uppercase"></h3> */}

            <p className="font-medium text-slate-700 mt-4">
              Steven King is an experienced lawyer with a focus on employment and human rights law serving the Durham Region and GTA region. As a former federal prosecutor, Steven has extensive trial experience. Knowledgeable and easy to understand, Steven ensures his clients feel heard and informed throughout the legal process.
            </p>
            <p className="font-medium text-slate-700 mt-4">
            Steven regularly represents workers, senior executives, directors, and professionals in all manner of workplace matters including but not limited to termination disputes, constructive dismissal, severance and employment contract negotiations. Steven will work with you to understand your desired outcome and risk appetite to tailor the best approach in achieving your goals. 
            </p>
            <p className="font-medium text-slate-700 mt-4">
            Steven's work with employers is rooted in providing proactive, practical, and holistic business advice, considering all aspects of your business to deliver comprehensive legal solutions. His pragmatic and proactive approach helps his employer clients navigate the intricacies of employment law with confidence, ensuring they are well-prepared for any challenges that may arise.
            </p>

            <h4 className="underlinetext-xl font-bold mt-10 text-2xl uppercase text-slate-800">OUR WORK SECTION</h4>
            <div className="px-4 py-8 text-slate-700">
            <h1 className="text-2xl font-bold mb-4">Advisory Work</h1>
            <ul className="list-disc pl-5 space-y-2">
              <li>Supported a steel manufacturer navigate the process in a union certification and bargaining drive</li>
              <li>Advised a manufacturer industry client in the share purchase of a business, completing due diligence and drafting of employment contracts for executives and staff</li>
              <li>Advised a small business in the progressive discipline of an absent employee</li>
              <li>Advised a union in a merger of another local</li>
            </ul>
          </div>

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
        
        <div className="px-4 py-8 text-slate-700">
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


            {/* <h4 className="underlinetext-xl font-bold mt-6 text-xl">Community Involvement</h4>
            <p className="font-medium text-slate-700 mt-4">
              Steven is committed to his community and enjoys mentoring the next generation. He has served on the Professional Development Committee with the Ontario Bar Association, contributing to the legal profession. He also volunteers at his local church in Oshawa as a small group leader, mentoring young adults and professionals.
            </p>
            <p className="font-medium text-slate-700 mt-4">
              In his spare time, Steven stays active through fitness and playing soccer. He also loves live music and plays the piano.
            </p> */}

            {/* <h4 className="underlinetext-xl font-bold mt-6 text-xl">Community Involvement</h4>
            <p className="font-medium text-slate-700 mt-4">
              Steven is committed to his community and enjoys mentoring the next generation. He has served on the Professional Development Committee with the Ontario Bar Association, contributing to the legal profession. He also volunteers at his local church in Oshawa as a small group leader, mentoring young adults and professionals.
            </p>
            <p className="font-medium text-slate-700 mt-4">
              In his spare time, Steven stays active through fitness and playing soccer. He also loves live music and plays the piano.
            </p> */}

            <div className="mt-4">
            <p className="text-lg text-slate-700">
        <strong>Email:</strong> <a href="mailto:steven@kinglaw.ca">steven@kinglaw.ca</a>
        </p>

        <p className="text-lg text-slate-700">
        <strong>Phone:</strong> <a href="tel:2898192272">(289)-819-2272</a>
        </p>

            </div>
        </div>
      </div>

      <div>
        <Image
          src={AboutImage}
        //   src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="rounded"
          alt=""
        />
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
        {/* <div className="flex flex-row justify-center  text-slate-800 text-2xl font-bold space-y-0 z-10">
          <div className="px-4">INTEGRITY</div>
          <div className="px-4 hidden md:inline"> | </div>
          <div className="px-4">DEDICATION</div>
          <div className="px-4 hidden md:inline"> | </div>
          <div className="px-4">PRACTICAL</div>
        </div> */}
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

