import {describe, beforeAll, beforeEach, afterEach, afterAll, it, expect, Assert} from '@ohos/hypium';

export default function abilityTest() {
    describe('ActsAbilityTest', function () {
        it('assertContain',0, function () {
            console.info("it begin")
            let a = 'abc'
            let b = 'b'
            expect(a).assertContain(b)
        })
    })
}