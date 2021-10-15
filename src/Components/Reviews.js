import React, {useState, useEffect} from 'react';
// import './Forum/style.css'
import { Link, useLocation} from 'react-router-dom';
import Navbar from './Navbar';
import './Reviews.css';


const ForumHome = () => {
    let location = useLocation();
    const [ walkResult, setWalkResult ] = useState([])
    const [ totalMessages, setTotalMessages ] = useState( '' )
    const[ lastName, setLastName ] = useState ('')
    const[ lastUpdated, setLastUpdated] = useState('')
    // console.log(location)

    const loadPage = async () => {
        const apiGetWalk = await fetch('/api/walkdata').then( result => result.json() )
        console.log('apigetwalk is', apiGetWalk)
        if (apiGetWalk.length == 0){
            setLastName('');
            setLastUpdated('')
        } else {
                apiGetWalk.forEach(element => { 
                    element.createdAt = new Date(element.createdAt).toString().substring(4, 15)   
                    element.updatedAt = new Date(element.updatedAt).toString().substring(4, 15) 
                });
                let total = 0;
                apiGetWalk.forEach(element => { 
                    total = total + element.userReply.length;
                });
                setWalkResult( apiGetWalk);
                setTotalMessages(total);
                setLastName( apiGetWalk[0].user.name);
                setLastUpdated( apiGetWalk[0].updatedAt)
            }
        

        }
        // console.log(walkResult)
        
        useEffect( function(){
            loadPage();
        }, [] );
    
    return (
        <div>
            <Navbar/>
            <div className = "background">
            <div className="reviews-background">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12 mx-auto" style={{height: "50px", backgroundColor: "#9f6934", padding: "0", margin: "0"}}>
                    <h2 style={{paddingTop: "10px", paddingLeft: "15px", color:"white"}}>Forum</h2>
                </div>
                <div class="col-lg-12 mx-auto">
                    <div className = "reviews-text">
                    <h2 class="my-4">Welcome To The Book Club Forum!</h2>
                    </div>
                    <div className = "small-text">
                    <p>Thoughts from our readers...</p>
                    </div>
                </div>
                <div class="row ml-2 mt-4">
                    <div class="col-lg-10 mx-auto mt-4">
                        <div class="row py-2"  style={{backgroundColor: "#fac7a0", border: "1px solid #000"}}>
                            <div className="col-lg-8 my-2">
                                    <div class="row my-auto" >
                                        <div className="col-lg-2 mt-4">
                                            <div className="mt-4" style={{width: "80px", margin: "0 auto"}}><i class="fas fa-envelope-open-text fa-5x"></i> </div>
                                        </div>
                                        <div class="col-lg-10 mt-2">
                                        <Link to="/the-walks" className="nav-link" ><h3>My favourite Harry Potter character!</h3></Link>
                                            <p class="ml-3">I know Severus Snape is controversial but....</p>
                                            <p class="ml-3"><b>Discussions</b><span class="px-2">{walkResult.length}</span><b>Messages</b><span class="px-2">{totalMessages}</span></p>
                                        </div>
                                    </div>     
                            </div>          
                            <div class="col-lg-4 my-2" style={{borderLeft: "2px solid #ffa37e"}}>
                                <div class="row my-auto"   >
                                    <div class="col-lg-12 ml-3 mt-4">
                                        <p><b>Latest by:</b><span class="px-2">{lastName}</span><b></b><span class="px-2">{lastUpdated}</span></p>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div class="col-lg-10 mx-auto">
                        <div class="row py-2" style={{backgroundColor: "#fac7a0", border: "1px solid #000"}}>
                            <div class="col-lg-8 my-2">
                                    <div class="row my-auto" >
                                        <div class="col-lg-2">
                                            <div class="mt-4" style={{width: "80px", margin: "0 auto"}}><i class="fas fa-envelope-open-text fa-5x"></i> </div>
                                        </div>
                                        <div class="col-lg-10  mt-2">
                                        <Link to="/the-walks" className="nav-link" ><h3>The book of the month had my heart aching :(</h3></Link>
                                            <p class="ml-3">One Day was so beautifully written, what do you all think?  </p>
                                            <p class="ml-3"><b>Discussions</b><span class="px-2">10</span><b>Messages</b><span class="px-2">10</span></p>
                                        </div>
                                    </div>     
                            </div>          
                            <div class="col-lg-4 my-2" style={{borderLeft: "2px solid #9f6934"}}>
                                <div class="row my-auto">
                                    <div class="col-lg-12  ml-3 mt-4">
                                    <p><b>Latest by:</b><span class="px-2">{lastName}</span><b></b><span class="px-2">{lastUpdated}</span></p>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div> 
                    </div>
                    <div class="col-lg-10 mx-auto">
                        <div class="row py-2" style={{backgroundColor: "#fac7a0", border: "1px solid #000"}}>
                            <div class="col-lg-8 my-2">
                                    <div class="row my-auto" >
                                        <div class="col-lg-2">
                                            <div class="mt-4" style={{width: "80px", margin: "0 auto"}}><i class="fas fa-envelope-open-text fa-5x"></i></div>
                                        </div>
                                        <div class="col-lg-10">
                                        <Link to="/the-walks" className="nav-link" ><h3>Trending books</h3></Link>
                                            <p class="ml-3">What books from tik tok are all the rave right now?</p>
                                            <p class="ml-3"><b>Discussions</b><span class="px-2">10</span><b>Messages</b><span class="px-2">10</span></p>
                                        </div>
                                    </div>     
                            </div>          
                            <div class="col-lg-4 my-2" style={{borderLeft: "2px solid #9f6934"}}>
                                <div class="row my-auto">
                                    <div class="col-lg-12  ml-3 mt-4">
                                    <p><b>Latest by:</b><span class="px-2">{lastName}</span><b></b><span class="px-2">{lastUpdated}</span></p>
                                    </div>
                                    
                                </div>
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            
        </div>
        </div>
        </div>
        </div>
    )
}

export default ForumHome





// import React from 'react';
// import Navbar from './Navbar';
// import './Reviews.css';
// // import buying from '../resources/buying.png';


// export default function Reviews() {
//   return(
//   <div class="grid">
//           <Navbar/>
//         {/* <header class="page-header">
//             <div class="content">
//                 <h1>About Us</h1>
//             </div>
//         </header>
//         <aside class="page-rightbar">
//             <div class="content">
//                 <p>Facts</p>
//             </div>
//         </aside>
//         <main class="page-main">
//             <div class="content">
//                 <img src ={buying} alt="books" class="responsive"/>
//             </div>
//         </main>
//         <footer class="page-footer">
//             <div class="content">
//                 <h3>Thank you!</h3>
//             </div>
//          </footer>   */}
//          </div> 
//     )
// }
