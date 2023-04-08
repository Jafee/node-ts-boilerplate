import {describe, expect, test} from '@jest/globals';
import main from "../src/app";

describe('app test', () => {
    test('test main func', () => {
        expect(main()).toBe(123);
    });
});
