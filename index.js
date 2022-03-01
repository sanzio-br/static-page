// const page = 
// (
//     <div>
//         <img width = "40px" src="./react-logo.png" />
//         <h1>Fun facts about react</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by jordan Walke</li>
//             <li>Has well over 100k stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById('root'))

// function navBar(){
//     return(
//             <div>
//                 <img width = "40px" src="./react-logo.png" />
//                 <h1>Fun facts about react</h1>
//                 <ul>
//                     <li>Was first released in 2013</li>
//                     <li>Was originally created by jordan Walke</li>
//                     <li>Has well over 100k stars on Github</li>
//                     <li>Is maintained by Facebook</li>
//                     <li>Powers thousands of enterprise apps, including mobile apps</li>
//                 </ul>
//             </div>
//     )
// }
// ReactDOM.render(navBar(), document.getElementById('root'))



// import header from './Header'


// import footer from './Footer'

function NavBar(){
    return(
        <div className = "content">
            <Header/>
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<NavBar/>, document.getElementById('root'));