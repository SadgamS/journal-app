
export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                  backgroundSize: 'cover',
                  backgroundImage: 'url(https://miracomosehace.com/wp-content/uploads/2020/03/fotografia-naturaleza-HD.jpg)',

                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Algo de texto aqui
                </p>
            </div>

            <div className="jounarl__entry-date-box">
                <span>Monday</span>
                <h4>29</h4>
            </div>
            
        </div>
    )
}
