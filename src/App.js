import './App.css';
import { defineMessages, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, IntlProvider } from "react-intl";


const messages = {
  depart: {
    id: "depart",
    //defaultMessage: "TransitFare",
    description: "Label for itinerary departure in narrative.",
    values: {departDate: new Date()}
  },
  transitFare: {
    id: "transitFare",
    //defaultMessage: "TransitFare",
    description: "Label for transit fare summary in narrative.",
    values: {fare: 1.50}
  }
};

const translatedMessages = {
  "en-US": {
    depart: "Depart {departDate, date, ::yyyyMMMMdd} at {departDate, time, ::hh:mm}",
    transitFare: "Transit fare: {fare, number, ::.00 currency/USD}",
    walkDistance: "Walk {dist, number, ::unit/mile}"
  },
  "fr": {
    depart: "Départ le {departDate, date, ::yyyyMMMMdd} à {departDate, time, ::HH:mm}",
    transitFare: "Coût en transports : {fare, number, ::.00 currency/EUR}",
    walkDistance: "{dist, number, ::unit/kilometer} de marche"
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {["en-US", "fr"].map(locale => (
        <IntlProvider locale={locale} messages={translatedMessages[locale]} defaultLocale='en-US'>
          <ul>
            <li>{locale}</li>
            <li><FormattedMessage {...messages.depart} /></li>
            <li><FormattedMessage {...messages.transitFare} /></li>
            <li><FormattedMessage id='walkDistance' values={{dist: 0.4}} /></li>
          </ul>
        </IntlProvider>
        ))}
      </header>
    </div>
  );
}

export default App;
