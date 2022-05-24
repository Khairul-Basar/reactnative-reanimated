import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import {Player, AnimateType} from '../classes/Player';
import Animated from 'react-native-reanimated';

export default function FirstAnimate() {

    let players = [
        new Player(0, 0, true),
        new Player(0, 1, false),
        new Player(0, 2, false),
        new Player(0, 3, false),
    ]

    function animate(animateType: AnimateType) {

        let isStarted = false;

        for (let i = 0; i < 4; i++) {
            if (!players[i].isAtHome()) {
                isStarted = true;
                break;
            }
        }

        if (!isStarted) {
            players[0].animate(animateType, () => {
                if (animateType !== AnimateType.HR) {
                    players[1].show();
                }
            });
        } else {

            // players who returned to home
            let returnedPlayers = [];

            for (let i = 0; i < 4; i++) {
                const player = players[i];
                if (!player.isAtHome()) {
                    const nextPosition = player.animate(animateType, () => {
                        console.log('animated outside stuff')
                    });
                    if (nextPosition === 0) {
                        returnedPlayers.push(player.id);
                    }
                }
            }

            players[getNextPlayerFromHome(returnedPlayers)].animate(animateType, () => {
                const visiblePlayers = getVisiblePlayersAtFrom();
                console.log('finished running from home', visiblePlayers);
                if (visiblePlayers.length === 0) {
                    const hiddenPlayer = getHiddenPlayerFromHome();
                    if (hiddenPlayer) {
                        players[hiddenPlayer].show();
                    }
                } else if (visiblePlayers.length > 1) {
                    for (let i = 1; i < visiblePlayers.length; i++) {
                        players[visiblePlayers[i]].hide();
                    }
                }
            });
        }
    }

    function getNextPlayerFromHome(returnedPlayers: number[]) {
        for (let i = 0; i < 4; i++) {
            const player = players[i];
            if (player.isAtHome() && !returnedPlayers.includes(player.id)) {
                return i;
            }
        }
    }

    function getVisiblePlayersAtFrom(): number[] {
        let playerIds = [];
        for (let i = 0; i < 4; i++) {
            const player = players[i];
            if (player.isAtHome() && player.isVisible()) {
                playerIds.push(player.id);
            }
        }
        return playerIds;
    }

    function getHiddenPlayerFromHome(): number | undefined {
        for (let i = 0; i < 4; i++) {
            const player = players[i];
            if (player.isAtHome() && !player.isVisible()) {
                return i;
            }
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.square}>
                {
                    Array(4).fill(0).map((_, i) => {
                        return (<Animated.View
                            key={i}
                            style={[
                                styles.imgContainer,
                                {position: 'absolute'},
                                players[i].getStyle(),
                            ]}>
                            <Animated.Image
                                source={require('../../assets/asset2.png')}
                                style={styles.imgStyle}
                            />
                        </Animated.View>)
                    })
                }
            </View>

            <View style={styles.btnGroup}>
                <TouchableOpacity style={styles.btnStyle} onPress={() => animate(AnimateType.B1)}>
                    <Text style={styles.btnText}>B1</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnStyle} onPress={() => animate(AnimateType.B2)}>
                    <Text style={styles.btnText}>B2</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => {
                        animate(AnimateType.B3)
                    }}>
                    <Text style={styles.btnText}>B3</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => {
                        animate(AnimateType.HR)
                    }}>
                    <Text style={styles.btnText}>HR</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.btnStyle}
                    onPress={() => {
                        // animateOut()
                    }}>
                    {/*<Text style={styles.btnText}>{currentBasePlayer}</Text>*/}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnGroup: {
        marginTop: 50,
        flexDirection: 'row',
    },
    btnStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,255,0.7)',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    imgContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
    },
    imgStyle: {
        height: 50,
        width: 50,
        transform: [{rotate: '130deg'}],
    },
    square: {
        height: 200,
        width: 200,
        borderWidth: 2,
        borderColor: 'salmon',
        transform: [{rotate: `225deg`}],
    },
})