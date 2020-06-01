import React, { Component } from 'react';
import { Spinner, HeaderDetails, ActorList } from '../components';
import Axios from 'axios';
import { API_URL, API_KEY } from "../config";

// const actors = [];

class Details extends Component {

    state = {
        loading: true,
        actors: [],
        mTitle: "",
        mDesc: "",
        imgSrc: "",
        revenue: "",
        runTime: "",
        status: "released",
        vote: ""
    }

    async componentDidMount(){
        try {
            const movieId = this.props.match.params.id;
            const url = `${API_URL}/movie/${movieId}?api_key=${API_KEY}&language=fr`;
            console.log(url)
            const { data : { 
                revenue, 
                runtime, 
                title, 
                overview, 
                status, 
                vote_average, 
                poster_path }
            } = await this.loadInfos(url);
            this.setState({
                revenue,
                runtime,
                mTitle: title,
                mDesc: overview,
                status,
                imgSrc: poster_path,
                vote: vote_average
            //Quand mon state est mis à jour, je dois lancer une nouvelle requete pour aller cherhcer les acteurs
            }, async () => {
                const url = `${API_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=fr`;
                const { data : { cast }} = await this.loadInfos(url);
                this.setState({ 
                    actors: [...cast], 
                    loading: false})
            } )
            console.log(this.state.runtime, this.state.mTitle);
        } catch (e) {
            console.log('e ', e);
        }
    }

    loadInfos = url => Axios.get(url);

    render(){
        const { loading, mTitle, mDesc, actors, imgSrc, revenue, runtime, status, vote} = this.state;
        return(
            <div className="app">
                { loading ? (
                    <Spinner />
                ) : (
                    <>
                        <HeaderDetails
                            mTitle={mTitle}
                            mDesc={mDesc}
                            imgSrc={imgSrc}
                            runtime={runtime}
                            revenue={revenue}
                            status={status}
                            vote={vote}
                        />
                        <ActorList actors={actors} />
                    </>
                )}
            </div>
        )
    }
} 

export { Details };