export default function ModalsContainer({ children }) {
    return (
        <section className="modals_container"
            style={{
                maxWidth:'75vw',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between',
                flexWrap:'wrap'
            }}
        >
            {children}
        </section>
    )
}