function Card({tiutlo, descricao}){
    return(
        <div 
        style={{
            border: '1px solid #ccc',
            padding: '16px',
            margin: '8px',
            borderRadius: '8px'
        }}>
            <h2>{titulo}</h2>
             <p>{descricao}</p>
        </div>
    )
}

module.exports = Card;