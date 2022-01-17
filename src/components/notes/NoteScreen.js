import { NoteAppBar } from "./NoteAppBar"


export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NoteAppBar />

            <div className="notes__content">
                
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea 
                    placeholder="what happend today"
                    className="notes__textarea"
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        src="https://i.blogs.es/9827f7/captura-de-pantalla-2021-11-03-a-las-11.24.09/450_1000.jpeg"
                        alt="imagen"
                    />
                </div>
            </div>
        </div>
    )
}
