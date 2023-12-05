import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaGift } from "react-icons/fa";
import { FaChildren, FaTimeline } from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { MdOutlineAccessible } from "react-icons/md";
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NavbarResponsive from './components/NavbarResponsive';

function App () {
  return (
    <div className='overflow-hidden'>
      <div className='max-lg:hidden'>
        <Navbar />
      </div>
        <div >
          <NavbarResponsive />
          </div>

    <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="h-screen w-screen"
          src="https://th.bing.com/th/id/R.5b24e77e81c0f2befc97a3309b0d5c9d?rik=EAlmq59ZJeGJeg&riu=http%3a%2f%2fpurentonline.com%2fblog%2fwp-content%2fuploads%2f2014%2f05%2fHotel-Wellington-Madrid.jpg&ehk=K%2f%2b3o3PZQp0BHo0GsNzbQ9%2buQt%2bU0hCXD0tDLuOO2pE%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-screen w-screen"
          src="https://th.bing.com/th/id/R.fdbf20c91ecd32a235448e3c9901bf67?rik=d9m4sxWPmwyX2g&riu=http%3a%2f%2fexpertoenhoteles.com%2fwp-content%2fuploads%2f2019%2f12%2ffsmad202.jpg&ehk=8d0R7CPdh3A%2fZPaFgRBi8sOKNJszlZJz5yzyhYmLEq4%3d&risl=&pid=ImgRaw&r=0"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="h-screen w-screen"
          src="https://th.bing.com/th/id/R.0cc4a8012f19b3074b76070f1b834977?rik=JBoqxVgsb0ClZg&riu=http%3a%2f%2fwww.espanaenpareja.com%2fwp-content%2fuploads%2f2017%2f06%2fHotel-Gran-Meli%c3%a1-Palacio-de-los-Duques.jpg&ehk=55BLSVOwkyuJtWNaUuWVGGFYEKOGZ%2fFPXI9nTHiSnNU%3d&risl=&pid=ImgRaw&r=0"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>

    <div id='about' className='bg-white mx-44 mt-32 max-lg:mx-0'>
     
        <div className='border-b solid border-gray-30 mb-32'> 
        <h1 className='text-5xl text-sky-950 max-lg:mb-10'>The GR Hotel Story</h1>
        <h4 className='text-2xl text-sky-950'>Journey with us and discover a unique experience</h4>
        </div>
      <div className='grid grid-cols-2 gap-4 mt-4 max-lg:grid-cols-1'>
        <div className='text-lg max-lg:mt-10'>
          <p>For over 25 years GR Hotels has been dedicated to providing <br></br>
            excellent service and genuine Kiwi hospitality to our guests. We are <br></br>
            passionate about New Zealand and ensuring that every guest who <br></br>
            steps through our doors has the best experience possible. <br></br>
         <br></br>
          While our guests are one of our greatest joys, our staff are one of our <br></br>
          greatest assets. The outstanding individuals who make up the GRHotel<br></br>
          team work tirelessly every day to share their joys and their passions, <br></br>
          delivering the very best care and service to our guests and to each other. <br></br>
      <br></br>
           Over the years, we have grown from a single hotel in Auckland to a <br></br>
           broader family of hotels around New Zealand. Here at GrHotel, we are <br></br>
           a family… an extended family that includes not only our staff but also <br></br>
           our guests. We pride ourselves on making everyone feel welcome and <br></br>
           hope that you find a home within our walls.</p>
        </div>
        <div>
          <img src='https://www.jetpark.co.nz/media/1025/_mg_7221.jpg?center=0.4125,0.50166666666666671&mode=crop&width=910&height=510&rnd=131758763970000000&quality=80' />
        </div>
      </div>
       
    </div>
    <div id='services' className='bg-gray-200 mt-32 pt-32 pb-32'>
      <center> 
        <h1 className='text-3xl font-medium'>Our services</h1>
        <div className='grid grid-cols-3 mt-16 max-lg:grid-cols-1'>
          <div className='ml-72 max-lg:ml-0'>
            <p className='mb-6'>Laundry<MdOutlineLocalLaundryService size={'2em'} /></p>
            <p className='mb-6'>Private Offers <FaGift size={'2em'} /></p>
            <p> Kid's Stay Free <FaChildren size={'2em'} /> </p>
          </div>
          <div>
            <p className='mb-6'>Free Parking <FaParking size={'2em'} /></p>
            <p className='mb-6'>Pet Friendly <FaDog size={'2em'} /></p>
            <p>Express Checkout <FaTimeline size={'2em'} /></p>
          </div>
          <div className='mr-72 max-lg:mr-0'>
            <p className='mb-6'>Free Wi-Fi <FaWifi size={'2em'} /></p>
            <p className='mb-6'>Meeting Facilities <FaPeopleCarryBox size={'2em'} /></p>
            <p>Accessible Facilities <MdOutlineAccessible size={'2em'} /></p>
          </div>
        </div>
      </center>
    </div>
  <div id="rooms" className='grid grid-cols-2 py-32 max-lg:grid-cols-1'>
    <div>
      <h1 className='font-semibold text-3xl border-b solid border-gray-300'>Our rooms, bathrooms and more</h1>
      <p className='mt-32 text-lg'>1 double bed and 1 single bed. Room of 20 m². <br></br>
        Layout: separate dining room. Internet : free Wi-Fi. <br></br>
        Entertainment: 40 cm LCD TV with digital channels. <br></br>
        Food & Drink: Mini-fridge, coffee/tea makers, and room service. <br></br>
        Bathroom: Private bathroom with shower, free toiletries and a hairdryer. <br></br>
       Practical details: telephone, safe and free newspapers; Free cots or <br></br>
       children's beds on request. Amenities: climate control and daily maid service. <br></br>
       Important information: No maid service, bed linen not available. Non-smoking. <br></br>
       Access to the room is through external corridors.</p>
    </div>
    <div> <Gallery /></div>
  </div>
  <Footer />
  </div>
  );
}

export default App;

