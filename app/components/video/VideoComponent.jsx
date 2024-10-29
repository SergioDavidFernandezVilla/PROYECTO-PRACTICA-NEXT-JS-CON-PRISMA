export const VideoComponent = ({videoURL}) => {
    return (
        <article>
             {videoURL ? (
                <video src={videoURL} controls title="Video description"></video>
            ) : (
                <p>El video no está disponible.</p>
            )}
            <footer>
                <h4>Titulo</h4>
                <p>Descripcion</p>
            </footer>
        </article>
    )
}