import Navbar from './components/Navbar';
import StrategyOverview from './components/StrategyOverview';
import StrategicManifesto from './components/StrategicManifesto';
import GlobalIntelligence from './components/GlobalIntelligence';
import StrategicEngine from './components/StrategicEngine';
import CoreBusiness from './components/CoreBusiness';
import VerticalScenarios from './components/VerticalScenarios';
import NineSystemsMatrix from './components/NineSystemsMatrix';
import FourMoats from './components/FourMoats';
import BusinessLoop from './components/BusinessLoop';
import HeatTransferEcosystem from './components/HeatTransferEcosystem';
import ProductPricingSystem from './components/ProductPricingSystem';
import MarketAnalysis from './components/MarketAnalysis';
import { LanguageProvider } from './i18n';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950">
        <Navbar />
      <main>
        <section id="manifesto">
          <StrategicManifesto />
        </section>
        <StrategicEngine />
        <CoreBusiness />
        <VerticalScenarios />
        <NineSystemsMatrix />
        <FourMoats />
        <BusinessLoop />
        <HeatTransferEcosystem />
        <MarketAnalysis />
        <ProductPricingSystem />
        <GlobalIntelligence />
        <section id="overview">
          <StrategyOverview />
        </section>
      </main>
      </div>
    </LanguageProvider>
  );
}

export default App;
