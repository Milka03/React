import React from 'react'
import Player from './Player'
import InputField from './InputField'

class GameAdmin extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            player1_Name: '<input name>',
            isPlaying1: false,
            player2_Name: '<input name>',
            isPlaying2: false,
        };
        this.change_Player1_Name = this.change_Player1_Name.bind(this);
        this.change_Player2_Name = this.change_Player2_Name.bind(this);
    }

    change_Player1_Name(nick){
        this.setState({player1_Name: nick});
    }

    change_Player2_Name(nick){
        this.setState({player2_Name: nick});
    }

    change_Player1_State(){
        this.setState({isPlaying1: true});
        this.setState({isPlaying2: false});
    }

    change_Player2_State(){
        this.setState({isPlaying1: false});
        this.setState({isPlaying2: true});
    }

    button_text(inGame){
        if(inGame == true){
            return 'This user is playing now';
        }
        else return 'PLAY';
    }

    render() {
        const text1 = this.button_text(this.state.isPlaying1);
        const text2 = this.button_text(this.state.isPlaying2);

        return (
        <div style={{margin:20}}>
            <Player number={'One'} name={this.state.player1_Name} buttonState={this.state.isPlaying1}
                    text={text1} state_handler={() => this.change_Player1_State()}/>
            <br></br>
            <Player number={'Two'} name={this.state.player2_Name} buttonState={this.state.isPlaying2}
                    text={text2} state_handler={() => this.change_Player2_State()}/>
            <br></br>
            <hr style={{color: 'grey', backgroundColor: 'grey', height:1, padding:0}}></hr>
            <br></br>
            <InputField number={'One'} handleNameChange={this.change_Player1_Name} />
            <br></br>
            <InputField number={'Two'} handleNameChange={this.change_Player2_Name} />
        </div>
    );}
}

export default GameAdmin;
