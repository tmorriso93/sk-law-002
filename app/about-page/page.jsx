

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
          <h2 className="text-3xl font-semibold text-gray-800 sm:text-3xl uppercase">
          Steven King
          </h2>

          <p className="font-medium text-slate-700 mt-4">
              Steven King is a seasoned employment lawyer in Durham, known for his pragmatic approach and integrity. Dedicated to providing quality legal services to employees and employers, Steven combines strategic thinking with creative solutions for complex employment and family law issues. Approachable and clear, Steven ensures clients feel comfortable and informed throughout the legal process, keeping their best interests at heart.
            </p>
            <p className="font-medium text-slate-700 mt-4">
              Steven has extensive experience assisting workers, senior executives, directors, and regulated professionals with various workplace issues, including termination disputes, constructive dismissal, severance, and employment contract negotiations. His deep understanding of these high-stakes matters enables him to offer strategic and tailored advice, ensuring his clients' interests are well-protected.
            </p>
            <p className="font-medium text-slate-700 mt-4">
              Steven's small business practice is rooted in providing practical and holistic business advice, considering all aspects of his clients' situations to deliver comprehensive legal solutions. His proactive approach helps both employee and employer clients navigate the intricacies of employment law with confidence, ensuring they are well-prepared for any challenges that may arise. With a reputation for excellence and a commitment to upholding the highest standards of the legal profession, Steven King is a trusted advocate for individuals and businesses alike in Ontario's dynamic employment landscape.
            </p>

            <h4 className="underlinetext-xl font-bold mt-6 text-xl">Community Involvement</h4>
            <p className="font-medium text-slate-700 mt-4">
              Steven is committed to his community and enjoys mentoring the next generation. He has served on the Professional Development Committee with the Ontario Bar Association, contributing to the legal profession. He also volunteers at his local church in Oshawa as a small group leader, mentoring young adults and professionals.
            </p>
            <p className="font-medium text-slate-700 mt-4">
              In his spare time, Steven stays active through fitness and playing soccer. He also loves live music and plays the piano.
            </p>
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

