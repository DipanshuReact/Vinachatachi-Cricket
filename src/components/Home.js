import React from 'react'
import Header from './Header'
import About from './About'
import ContactUs from './ContactUs'
import {Link} from 'react-router-dom';

export default function Home() {
  return (
    <>

     <Header></Header>
     {/*   */}
     <div className='my-5' style={{padding:"8px",textAlign:"center"}}>
     <h1><strong><i class="fa-solid fa-industry" style={{color:"#ff3333"}}> FACT</i></strong></h1>
     <div className="container" style={{backgroundColor:"#e8e5de",color:"black",paddingTop:"15px",paddingBottom:"10px"}}>
        <h5>We work in the hardest-to-reach places, where its toughest to be a child.</h5>
        <p>When you give to Save the Children, 85% of every Rupees goes straight to our mission to provide lifesaving relief to children. </p>
        <ul>
        <li><strong>Rs.3000</strong> can provide enough food to keep 3 children from going hungry for a month</li>
       <li><strong>Rs.6000 </strong>can wrap 30 warm, cozy blankets around children affected by conflict</li>
       <li><strong>Rs.4500 </strong> enough books and stationary for around 50 children</li>
       </ul>  
       <p>With your support, we can continue our work to keep children in the Maharashtra &nbsp;and&nbsp;around the India healthy, educated and safe.</p>
     </div>
     </div>
     {/*   */}
     <div style={{textAlign:"center"}}>
     <h1><strong><i class="fa-solid fa-building-ngo" style={{color:"#ff3333"}}> वीणा छताची शाळा </i></strong></h1>
     </div>
     <div className='container'>
    <img className='container my-3' src="https://i.ibb.co/8j9m8k4/Whats-App-Image-2023-09-20-at-07-29-14.jpg" height={"300px"} width={"100px"}  border="0"/>
    <a target='_blank' href='https://cosmofeed.com/vp/650ee39ef8c83a001d29a147'><button type="button" class=" container btn btn-danger btn-lg my-4">Donate Us Now</button></a>
    </div>
    <br></br>
    <br></br>
   
    {/*   */}
    {/* <div className='container my-3' style={{textAlign:"center",color:"red",backgroundColor:"rgba(209, 204, 189, 0.3)"}}>
        <h1><strong>Donate Us Now</strong></h1>
        </div> */}
        <div className='container'>
        <h2 style={{verticalAlign:"middle",textAlign:"center",color:"#00cc00"}}><strong>Donate Here </strong><i class="fa-solid fa-hand-holding-dollar" style={{color:"#00cc00",verticalAlign:"top"}}></i></h2>
        </div>
        <div className='container-fluid' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "35rem"}}>
    <img src="https://i.ibb.co/Wfrw1c2/Whats-App-Image-2023-09-20-at-07-28-17.jpg" height={"300px"} width={"100%"}  border="0"/>
   </div>   
   </div>
   <br></br>
   <div className='container' style={{display:"flex",justifyContent:"center",flexDirection:"row",columnGap:"3px"}}>
   <a target='_blank' href='https://cosmofeed.com/vp/650ee39ef8c83a001d29a147'> <img style={{height:"55px",padding:"2px"}} src='https://1000logos.net/wp-content/uploads/2023/03/Paytm-logo.png' ></img></a>
   <a target='_blank' href='https://cosmofeed.com/vp/650ee39ef8c83a001d29a147'><img style={{height:"65px"}} src='https://1000logos.net/wp-content/uploads/2022/11/PhonePe-Logo-768x432.png'></img></a>
   <a target='_blank' href='https://cosmofeed.com/vp/650ee39ef8c83a001d29a147'><img style={{height:"65px"}} src='https://1000logos.net/wp-content/uploads/2023/03/Google-Pay-logo-768x432.png'></img></a>
   </div>
   <marquee><div className='container'>
        <h2 style={{verticalAlign:"middle",textAlign:"center",color:"#ff1a1a"}}><strong><i class="fa-solid fa-hand-point-up"></i> Click To Donate <i class="fa-solid fa-hand-point-up"></i></strong> <strong>  Click To Donate <i class="fa-solid fa-hand-point-up"></i></strong></h2>
        </div></marquee>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
     <br></br>
  {/*   */}

{/*   */}
  <div className='mx-3'>
 <h1 style={{verticalAlign:"middle",color:"#5c00e6"}}><i class="fa-solid fa-camera-retro" style={{color:"#5c00e6",verticalAlign:"top"}}></i><strong> Some Glimpse </strong></h1>
 </div>
 <div style={{backgroundColor:"#e6e6e6"}}>
<div className='container-fluid my-3' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem",backgroundColor:"#fff"}}>
   <img src="https://i.ibb.co/XkcKYt2/IMG-20230824-WA0043.jpg" class="card-img-top" />
   <div class="card-body">
    <p class="card-text"><strong>भटके विमुक्त, भीक मागणारी भंगार गोळा करून पोटाची खळगी भरणारी कुटुंबे झोपड्या मध्ये राहत असून त्यांची शाळा बाह्य मुले मुली शिक्षणापासून वंचित असलेली..
</strong></p>
  </div>
 </div>
</div>


<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/SBrMfhM/IMG-20230824-WA0021.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>भटके विमुक्त, भीक मागणारी भंगार गोळा करून पोटाची खळगी भरणारी कुटुंबे झोपड्या मध्ये राहत असून त्यांची शाळा बाह्य मुले मुली शिक्षणापासून वंचित असलेला हा एक चिमु सखोल अभ्यास करत असताना हे भाउक टिप्पण...
</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/Qv7dKvG/IMG-20230901-WA0028.jpg"></img>
   <div class="card-body">
    <p class="card-text"><strong>औरंगाबाद येथील रहिवाशी अग्रवाल ग्रूप यांनी विना छताची शाळेला शालेय साहित्य स्वरूपात योगदान दिले
</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/BKjnLWH/Whats-App-Image-2023-09-21-at-23-47-57.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>वीणा छताची शाळेतील इयत्ता 10 वी स्टेट बोर्ड.. गुणवंत विद्यार्थ्यांचा सत्कार करण्यात आला तेंव्हा...MP Law College चे उपप्राचार्य डॉ. श्रीकांत मोरे सर, ॲड. प्रतीक अगरवाल सर, ग्लोबल आडगाव चित्रपटाची सर्व टीम.. इत्यादी मान्यव</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/F03p7bH/Whats-App-Image-2023-09-21-at-23-48-28.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>छ. संभाजी नगर चे ग्रामीण पोलीस आयुक्त.. श्री.मनिष कल्वानिया सर यांच्या हस्ते सत्कार करण्यात आला तेंव्हा... कॅन्सर हॉस्पिटल डीन डॉ. अरविंद गायकवाड सर, सुनील लांजेवार सर, (अप्पर पोलीस अधीक्षक,) इत्यादी मान्यवर</strong>
</p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/85hxmv6/Whats-App-Image-2023-09-21-at-23-49-22.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>विना छताची शाळेला भेट देण्यासाठी... आदरणिय श्री. उत्तम सोनकांबळे सर, सहसंचालक,(कोषागार विभाग, छ.संभाजी नगर</strong>
</p>
  </div>
 </div>
</div>

<div className='container-fluid my-3' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "25rem"}}>
    <img src="https://i.ibb.co/6DPchs8/Whats-App-Image-2023-09-21-at-23-50-15.jpg"  border="0"></img>
   <div class="card-body">
    <p class="card-text"><strong>सावित्री बाई फुले यांच्या जयंतीनिमित्त.. विना छताची शाळेला भेट देण्यासाठी.. डॉ. सुलक्षणा जाधव मॅडम देवगिरी कॉलेज,औरंगाबाद) डॉ. रंजना चावडा मॅडम,(देवगिरी कॉलेज औरंगाबाद)</strong>

</p>
  </div>
 </div>
</div>

</div>
<div className='mx-4'>
 <Link to='/Gallery'><p><strong>Watch more...</strong></p></Link>
 </div>
 <br></br>
 
{/*    */}

{/*   */}

<div className='mx-3 my-4'>
<h1 style={{verticalAlign:"middle",color:"#e60073"}}><i class="fa-solid fa-trophy" style={{color:"#e60073",verticalAlign:"top"}}></i><strong> Our Achievments </strong></h1>
 </div>
 <div style={{backgroundColor:"#e6e6e6"}}>
<div className='container-fluid my-1
' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem"}}>
    <img src="https://i.ibb.co/3N9Hv6Q/Whats-App-Image-2023-09-20-at-15-09-11.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>5 सप्टेंबर शिक्षक दिनानिमित्त MGM University छ.संभाजी नगर (औरंगाबाद ) येथे ..महाराष्ट्र राष्ट्रिय विधी विद्यापीठ चे कुलगुरु डॉ.के.व्ही.सराम सर यांच्या हस्ते माझ्या कार्याचा गौरव व पुरस्कार देऊन सत्कार करण्यात आला.. तेव्हा MGM University चे कुलगुरु डॉ. विलास सपकाळ सर आणि कुलसचिव डॉ. आशिष गाडेकर सर, आणि ईतर विवीध क्षेत्रांतील मान्यवर उपस्थीत होते</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem"}}>
    <img src="https://i.ibb.co/J2Xb1gC/Whats-App-Image-2023-09-20-at-15-09-51.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>वीणा छताची शाळेतील इयत्ता 10 वी महाराष्ट्र स्टेट बोर्ड चे गुणवंत विद्यार्थ्यांचा सत्कार... आदरणिय डॉ. हर्षदीप कांबळे सर,( IAS officer,महाराष्ट्र राज्य उद्योग प्रधान सचिव, मुंबई) यांच्या हस्ते करण्यात आले तेव्हां , (कॅन्सर हॉस्पिटल चे डीन.. डॉ. अरविंद गायकवाड सर,संभाजी नगर,) दिपक कदम सर,(आंबेडकरवादी मिशन नांदेड) इत्यादी मान्यवर उपस्थि</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem"}}>
    <img src="https://i.ibb.co/bH2h1nW/Whats-App-Image-2023-09-20-at-15-10-37.jpg"  border="0"></img>
   <div class="card-body">
    <p class="card-text"><strong>छ. संभाजी नगर येथील.. भारतरत्न मौलाना आझाद संशोधन केंद्र व सभागृह येथे.. माझ्या कार्याचा गौरव म्हणून... आदरणिय डॉ. हर्सदिप कांबळे सर,( IAS officer,महाराष्ट्र उद्योग प्रधान सचिव मुंबई) यांच्या हस्ते सत्कार करण्यात आला तेंव्हा.. दिपक कदम सर,(आंबेडकरवादी मिशन नांदेड) डॉ. अरविंद गायकवाड सर, (कॅन्सर हॉस्पिटल डीन,संभाजी नगर) (आदित्य जिवणे सर,IAS officer, बीड) इत्यादी मान्यवरांची उपस्थीती हो</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-5' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem"}}>
    <img src="https://i.ibb.co/djSS725/IMG-20230901-WA0166.jpg"  />
   <div class="card-body">
    <p class="card-text"><strong>डॉ बाबासाहेब आंबेडकर यांच्या जयंती निमित्त (2023)  आदरणिय..प्रविना यादव मॅडम पोलिस इन्स्पेक्टर ,(सायबर सेल , संभाजी नगर) यांनी विना छताची शाळेला भेट देऊन विध्यार्थ्यांना मार्गदर्शन केले व शालेय साहित्य वाटप केले... तेव्हा डॉ लता जाधव मॅडम देवगिरी कॉलेज आणि ईतर मान्यवर उपस्थि</strong></p>
  </div>
 </div>
</div>

<div className='container-fluid my-4' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "30rem"}}>
    <img src="https://i.ibb.co/y4MQ86j/Whats-App-Image-2023-09-20-at-15-11-43.jpg"  border="0"/>
   <div class="card-body">
    <p class="card-text"><strong>अंतरराष्ट्रीय   सर्वोत्कृष्ट चित्रपट पुरस्कार प्राप्त.. ग्लोबल आडगाव चित्रपटाची सर्व टीम.. विना छताची शाळेला 15 ऑगस्ट स्वतंत्र दिना निमित्त भेट देऊन शालेय साहित्य वाटप केले... मनोज कदम सर (निर्माते ग्लोबल आडगाव मराठी चित्रपट) अनिलकुमार साळवे सर, (दिग्दर्शक, पट कथा लेखक, ग्लोबल आडगाव मराठी चित्रपट) आणि इत्यादी सर्व कलाकार उपस्थीत</strong>
</p>
  </div>
 </div>
</div>
</div>
<div className='mx-3'>
 <Link to='/Gallery'><p><strong>Watch more..</strong></p></Link>
 </div>
 <br></br>

{/*   */}

{/*   */}
<div className='mx-3 my-4'>
<h1 style={{verticalAlign:"middle",color:"#5c00e6"}}><i class="fa-solid fa-newspaper" style={{color:"#5c00e6",verticalAlign:"top"}}></i><strong> News Articles </strong></h1>
 </div>
 <div style={{backgroundColor:"#e6e6e6"}}>
<div className='container-fluid my-2' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "35rem"}}>
    <img src="https://i.ibb.co/jvnCvXX/IMG-20230901-WA0006.jpg"  border="0"/>
   </div>   
   </div>

   <div className='container-fluid my-4' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "35rem"}}>
    <img src="https://i.ibb.co/LQqd4kL/IMG-20230824-WA0038.jpg"  border="0"/>
   </div>   
   </div>

   <div className='container-fluid my-4' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "35rem"}}>
    <img src="https://i.ibb.co/ZTSG08m/IMG-20230824-WA0035.jpg"  border="0"/>
   </div>   
   </div>

   <div className='container-fluid my-4' style={{display:"flex",justifyContent:"center"}}>
    <div class="card" style={{width: "35rem"}}>
    <img src="https://i.ibb.co/KD0DL4T/IMG-20230824-WA0030.jpg"  border="0"/>
   </div>   
   </div>
   </div>
   <div className='mx-3'>
 <Link to='/Gallery'><p><strong>Watch more..</strong></p></Link>
 </div>
 <br></br>

{/*   */}


{/*   */}
<div style={{textAlign:"center"}}>
     <h1><strong><i class="fa-solid fa-building-ngo" style={{color:"#ff3333"}}> वीणा छताची शाळा </i></strong></h1>
     </div>

<About></About>    
<ContactUs></ContactUs>
{/*    */}
    
    </>

  )
}
