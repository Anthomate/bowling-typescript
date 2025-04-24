export class BowlingGame
{
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        return 0;
    }
}