import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import useWindowDimensions from './windowDimensions.js'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Paper } from '@material-ui/core';
import { Table, TableRow, TableCell, TableHead, TableBody } from '@material-ui/core';
import decks from '../data/decks.js';
import tournaments from '../data/tournaments.js';
import players from '../data/players.js';
import topDecks from '../data/topDecks.js';

const text = {
    margin: '15px',
    padding: '10px'
}

export default function HomeMenu(props) {
    const { width } = useWindowDimensions();
    const [playerList, setPlayerList] = useState(players);

    useEffect(() => {
        const filtered = players.sort(function (a, b) {
            return b.points - a.points;
        });

        setPlayerList(filtered.filter((player, key) => {
            return (key < 10);
        }));
    });
    

    function compareDecks(target) {
        for (var i = 0; i < decks.length; i++) {
            if (decks[i].archetype === target.deck) {
                return decks[i];
            }
        }

        return target;
    }

    function comparePlayers(name) {
        for (var i = 0; i < playerList.length; i++) {
            if (playerList[i].name === name) {
                return playerList[i];
            }
        }

        return name
    }

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        tableWrapper: {
            maxHeight: 800,
            minWidth: 100,
            overflow: 'auto',
        },
    });

    const classes = useStyles();

    var newestFormat = tournaments[0].format;
    var currFormat = tournaments.filter((tournament, key) => {
        return key < 5;
    });

    return (
        <Grid>
            <Grid container>
                <Grid item xs={11} className="grid-container">
                    <h3 style={text}>Latest Tournament Winners | {newestFormat}</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table>
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" className="table-header">Date</TableCell>
                                        <TableCell align="left" className="table-header">Tournament</TableCell>
                                        <TableCell align="left" className="table-header">Name</TableCell>
                                        {width > 768 && <TableCell align="left" className="table-header">Deck</TableCell>}
                                        {width > 768 && <TableCell align="left"></TableCell>}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {currFormat.slice(0,5).map((tournament, key) => {
                                    var search = compareDecks(tournament.standings[0]);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                            return <img key={key} src={img} className={width > 961 ? "desktop-icon" : "mobile-icon"} alt="rekt" />
                                    })};

                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}><Moment format="DD/MM/YY">{tournament.date}</Moment></TableCell>
                                        <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                            <Link style={{cursor: 'pointer'}} onClick={() => props.setCurrentTournament(tournament)}>{tournament.name}</Link>
                                        </TableCell>
                                        <TableCell component="th" align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                                <Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentPlayer(comparePlayers(tournament.standings[0].name))}>{tournament.standings[0].name}</Link>
                                        </TableCell>
                                        {width > 768 && <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{tournament.standings[0].deck}</TableCell>}
                                        {width > 768 && <TableCell align="left">
                                        <p>{sprites}</p>
                                        </TableCell>}
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
            <Grid className="flex-container">
                <Grid item xs={11} className="grid-container">
                    <h3 style={text}>Top Performing Decks</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table className="desktop-table">
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" className="table-header">Deck</TableCell>
                                        <TableCell align="left" className="table-header"></TableCell>
                                        <TableCell align="left" className="table-header">Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {topDecks.slice(0,5).map((deck, key) => {
                                    var search = compareDecks(deck);
                                    if (search.hasOwnProperty('thumbnails')) {
                                        var sprites = search.thumbnails.map((img, key) => {
                                            return <img key={key} src={img} className={width > 961 ? "desktop-icon" : "mobile-icon"} alt="rekt" />
                                    })};
                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{deck.deck}</TableCell>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{sprites}</TableCell>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{deck.currCP}</TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={11} className="grid-container">
                    <h3 style={text}>Top Performing Players</h3>
                    <Paper className={classes.root}>
                        <div className={classes.tableWrapper}>
                            <Table className="desktop-table">
                                <TableHead>
                                    <TableRow style={{backgroundColor: '#424242'}}>
                                        <TableCell align="left" className="table-header">Name</TableCell>
                                        <TableCell align="left" className="table-header">Points</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                {playerList.slice(0,10).map((player, key) => {
                                    return(
                                    <TableRow key={key}>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>
                                                <Link style={{ cursor: 'pointer' }} onClick={() => props.setCurrentPlayer(comparePlayers(player.name))}>{player.name}</Link></TableCell>
                                        <TableCell align="left" className={width > 768 ? "desktop-cell" : "mobile-cell"}>{player.points}</TableCell>
                                    </TableRow>
                                )})}
                                </TableBody>
                            </Table>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}