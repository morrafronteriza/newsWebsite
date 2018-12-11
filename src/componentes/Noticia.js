import React from 'react'
import  PropTypes from 'prop-types'


const Noticia = (props)=>  {

    const { urlToImage, url,title,source,author}= props.noticia;

    const imagen = (urlToImage) ?
    <div className="card-image">  
            <img src={urlToImage} />
    </div>
     : "";


    return(
        <div className="col s12 m6 l3">
            <div className="card  medium">
                {imagen}
                <div className="card-content">
                    <p><b>{title} </b> </p>
                    <p>Noticia de {source.name}</p>
                   
                </div>
                <div className="card-action">
                    <a href ={url} target="_blank"  rel="noopener noreferrer" className="waves-effects waves-light btn"> Noticia Completa </a>


                </div>

            </div>
            
        </div>
    )
}

Noticia.propTypes={
    noticia: PropTypes.shape({
        urlToImage:PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        source:PropTypes.object.isRequired,
        
    })

}
export default Noticia;