export const VideoComponent = ({videoURL}) => {
    return (
        <article>
            
                <video controls>
                <source src="../public/videos/meme_corto.mp4" type="video/mp4" />
                
              </video>
            
            <footer>
                <h4>Titulo</h4>
                <p>Descripcion</p>
            </footer>
        </article>
    )
}