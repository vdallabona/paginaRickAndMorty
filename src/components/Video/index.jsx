import './styles.css'

export default function Video() {
    return (
        <section>
            <h2>Incorporando Imagem e Vídeo</h2>
            <div class="container">
                <div>
                    <figure>
                        <img src="https://avatars.githubusercontent.com/u/149815846?v=4&size=64" width="60%" alt="Exemplo de imagem" />
                        <figcaption>Eu em pixel art</figcaption>
                    </figure>
                </div>
                <div>
                    <h3>Vídeo incorporado:</h3>
                    <iframe width="80%" height="60%" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    )
}