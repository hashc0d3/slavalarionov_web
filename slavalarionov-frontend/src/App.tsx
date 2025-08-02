import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ConfiguratorPage from "@pages/Configurator.tsx";

function App() {
    return (
        <div>
            <Router>
                <main>
                    <Routes>
                        <Route path="/" element={<Navigate to="/configurator" replace />} />
                        <Route path="/configurator" element={<ConfiguratorPage />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;