import {BowlingGame } from "./bowlingGame";

describe('BowlingGame', () => {
    test('should exist', () => {
        const game = new BowlingGame();
        expect(game).toBeDefined();
    });
});