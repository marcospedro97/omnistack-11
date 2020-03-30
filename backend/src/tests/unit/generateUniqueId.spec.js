const generateUniqueId = require('../../utils/generateUniqueId')

describe('generateUniqueId', () => {
    it('should generate unique ID', () => {
        const id = generateUniqueId();
        
        expect(id).toHaveLength(16)
    });
});