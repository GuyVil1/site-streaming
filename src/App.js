import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';//Module yarn add react-router-dom


import { Header, Spinner } from './components';
import { Home, Details, NotFound } from './routes';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from './config';

import './App.css';
import '../src/css/Header.css';

class App extends Component{

  //Créer mon state initial
  state = {
    loading: true,
    movies: [],//Objet qui reçois la liste des films disponible 
    badge: 0,//nombre de favoris de l'abonné
    image: null,//image du film
    mTitle: "",//titre du film
    mDesc: "",//description du film
    activePage: 0,
    totalPages: 0,
    searchText: ""
  }
  
  /***************************************************************
   * PROBABLEMENT A MODIFIER, PAS BESOIN D'API DANS PROJET FINAL
   ***************************************************************/
  async componentDidMount(){
    try {
      
      // Je selectionne les données utiles du json obtenu
      const { data : { results, page, total_pages } } = await this.loadMovies();
      console.log('res', results);
      //Je redistribue les données dans mon state
      this.setState({
        movies: results,
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
        }
      )
    } catch (e) {
      console.log('e', e);
    }
    console.log('monté');
  }

  //Requete API pour chercher infos films
  /***************************************************************
   * PROBABLEMENT A MODIFIER, PAS BESOIN D'API DANS PROJET FINAL
   ***************************************************************/

   //récupérer liste des films
  loadMovies = () => {
    const page = this.state.activePage + 1;
    const url = `${API_URL}/movie/popular?api_key=${API_KEY}&page=${page}&language=fr`;
    return axios.get(url);
  }

  //fonction pour trouver un film spécifique
  searchMovies = () => {//Sera appelée dans Handlesearch
    const url = `${API_URL}/search/movie/?api_key=${API_KEY}&query=${this.state.searchText}&language=fr`;
    return axios.get(url);
  }

  //utiliser la donnée entrée par le user pour lancer searchMovies()
  handleSearch = value => {
    try {
      this.setState({
        loading: true, 
        searchText: value,
        image: null
      }, async () => {
        // Je selectionne les données utiles du json obtenu
        const { data : { results, page, total_pages } } = await this.searchMovies();
        console.log('res', results);
        //Je redistribue les données dans mon state
        this.setState({
          movies: results,
          loading: false,
          activePage: page,
          totalPages: total_pages,
          image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
          mTitle: results[0].title,
          mDesc: results[0].overview
          }
        )
        document.querySelector('.loadButton').style.display=('none');
      })
    } catch (e) {
      console.log('e', e);
    }
    console.log('handleSearch');
  }

//Charger plus de films (méthode asynchrone)

  loadMore = async () => {

    try {
      this.setState({loading: true});
      const { data : { results, page, total_pages } } = await this.loadMovies();
      //Je redistribue les données dans mon state
      this.setState({
        movies: [...this.state.movies ,...results],
        loading: false,
        activePage: page,
        totalPages: total_pages,
        image: `${IMAGE_BASE_URL}/${BACKDROP_SIZE}/${results[0].backdrop_path}`,
        mTitle: results[0].title,
        mDesc: results[0].overview
        })
        console.log('resultat2 ', this.state.movies);
    } catch (e) {
      console.log('Erreur load more');
    }
  }

  render(){
    return (
      //BrowserRouter est toujours le premier élément que l'on retourne quand on utilise react-router-dom
      //BrowserRouter n'aura qu'un seul élement enfant (ici notre div.App)
      <BrowserRouter>
        <div className="App">
          <Header badge={this.state.badge} />
          {/* Je vérifie si j'ai déjà une image stockée dans mon state, si pas, je lance la roue de chargement */}
          {!this.state.image ? (
            <Spinner />
          ) : (
            // Le switch va me permettre d'afficher à la volée différente route (page)
            <Switch>
            <Route path="/" exact render={() => (
                <Home
                  {...this.state}
                  onSearchClick={this.handleSearch}
                  onButtonClick={this.loadMore} 
                />
              )} 
            />
            <Route path=':id' component={Details} /> 
             {/*enfin la route pour affiche la page 404  */}
            <Route component={NotFound} />
          </Switch>
          )}

        </div>
      </BrowserRouter>
    ); 
  }
}

export default App;