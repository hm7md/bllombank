function Cards(props) {
    return(
        <div className="article">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUT0FKOVmaWOlmd3KaV_uLFkUcam6N1JH4pQ&usqp=CAU" alt="" />
            <div className="content">
              <p>{props.paraghraph}
              </p>
              <h4
                >Recieve money in any<br />
                currency with no fees.</h4
              >
              <p
                >The world is getting smaller and<br />
                we are becoming more mobile.So,<br />
                why should you be forced to only<br />
                recieve money in a single...</p
              >
            </div>
          </div>
    );
}
export default Cards;