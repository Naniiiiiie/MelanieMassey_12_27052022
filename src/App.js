import './style/App.css';
import Header from './components/Header/Header';
import Activity from './components/Activity/Activity';
import Keydata from './components/Keydata/Keydata';
import {getMainActivity, getMainInformation, getAverageSessions, getPerformance} from './data/dataManager';
import imgMeditation from './assets/meditation.png';
import imgSwimming from './assets/swimming.png';
import imgCycling from './assets/cycling.png';
import imgBodybuilding from './assets/bodybuilding.png';
import energy from './assets/energy.png';
import proteins from './assets/proteins.png';
import glucides from './assets/glucides.png';
import lipides from './assets/lipides.png';
import DailyActivityChart from './components/BarChart/BarChart';
import AverageSessionsChart from './components/LineChart/LineChart';
import ActivityTypeChart from './components/RadarChart/RadarChart';

// utilisation des données temporairement
import * as Mock from '../src/data/data.js'


function App() {
  console.log(Mock)
  const mainInformation = getMainInformation(Mock);
  // console.log(mainInformation)
  const mainActivity = getMainActivity(Mock)
  // console.log(mainActivity.sessions)
  const averageSessions = getAverageSessions(Mock)
  // console.log(averageSessions)
  const activityType = getPerformance(Mock)
  console.log(activityType.data)

  return (
    <div className="App">
      <Header/>
      <section>
        <aside>
          <div className='activities'>
            <Activity img={imgMeditation} alt="meditation"/>
            <Activity img={imgSwimming} alt="swimming"/>
            <Activity img={imgCycling} alt="cycling"/>
            <Activity img={imgBodybuilding} alt="bodybuilding"/>
          </div>
          <p className='copyrights'>Copyright, SportSee 2020</p>
        </aside>
        <div className='dashboardSection'>
          <header className='dashboardHeader'>
            <h1>Bonjour {mainInformation.userInfos.firstName}</h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier &#128079;</p>
          </header>
          <div className='dashboardContent'>
            <DailyActivityChart data={mainActivity.sessions} title="Activité quotidienne" xDataKey="day" data1="kilogram" legendData1="Poids (kg)" data2="calories" legendData2="Calories brûlées (kCal)"/>
            <AverageSessionsChart data={averageSessions.sessions} title="Durée moyenne des sessions" xDataKey="day" data1="sessionLength"/>
            <ActivityTypeChart data={activityType} />
            <div className='todayScore'></div>
            <div className='keyDataContainer'>
              <Keydata className="energy" img={energy} data={mainInformation.keyData.calorieCount} dataType="Calories"/>
              <Keydata className="proteins" img={proteins} data={mainInformation.keyData.proteinCount} dataType="Protéines"/>
              <Keydata className="glucides" img={glucides} data={mainInformation.keyData.carbohydrateCount} dataType="Glucides"/>
              <Keydata className="lipides" img={lipides} data={mainInformation.keyData.lipidCount} dataType="Lipides" />
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default App;
