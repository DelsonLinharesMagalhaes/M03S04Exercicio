import { Outlet } from "react-router-dom"

export const AppLayout = () => {
  return (
    <div className="Layout">
        
        <header>Header da aplicação</header>

        <main className="Main">
            <div className="ActionsContainer">
                <button>Ação</button>
            </div>
        </main>

        <section className="MainContainer">
            <Outlet/>
        </section>
      
    </div>
  )
}

