// import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from "react-icons/bi";
import AllServices from "../../components/AllServices";
import Faq from "../../components/Faq";
import Reviews from "../../components/Reviews";

// async function getAllReviews() {
//     const reviewsPromise = await fetch("http://localhost:1337/api/client-reviews")
//     const reviews = await reviewsPromise.json()
//     return reviews.data
// }

export default function Page() {
    // const reviews = await getAllReviews()

    return (

        <div>
            
        {/* <div>
        <h1 className="mb-6 text-4xl font-bold text-gray-700">Our Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
                <div key={index} className="p-4 border rounded shadow-md">
                    <div className="text-yellow-500">
                        {'★★★★★'} 
                    </div>
                    <div className="font-semibold text-lg text-gray-800">{review.name}</div>
                    <div className="text-gray-600 mt-2 flex items-start">
                        <BiSolidQuoteSingleLeft className="text-4xl text-gray-300 mr-2" />
                        <span className="flex-1">{review.reviewText}</span>
                        <BiSolidQuoteSingleRight className="text-4xl text-gray-300 ml-2" />
                    </div>
                </div>
            ))}
        </div>
        <p className="font-bold my-10 text-gray-700 underline"><a href="https://www.google.com/maps/place/King+Law/@43.9000721,-78.8622394,17z/data=!3m1!4b1!4m6!3m5!1s0x89d51d6558eb533d:0xe754c2cf019a58dc!8m2!3d43.9000721!4d-78.8622394!16s%2Fg%2F11vqhywjpd?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" >See More</a></p>
        </div> */}
        <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center pb-6 py-8">
        <div className="flex flex-col text-slate-100 text-5xl max-sm:text-3xl font-bold space-y-2 z-10">
          <p className="text-[#DCBE7E] flex justify-center tracking-wide px-4"><span className='px-4' style={{ color: '#00133D' }}>We</span> Protect.</p>
          <p className="text-[#DCBE7E] flex justify-center tracking-wide "><span className='px-4' style={{ color: '#00133D' }}>We</span> Litigate.</p>
          <p className="text-[#DCBE7E] flex justify-center tracking-wide "><span className='px-4' style={{ color: '#00133D' }}>We</span> Resolve.</p>
        </div>
        <h2 className="text-center text-5xl font-bold tracking-tight text-gray-800 sm:text-7xl mb-6 mt-10">SERVICES</h2>
      </div>
        <AllServices />
        <Reviews />
        <Faq />
    </div>

    )
}