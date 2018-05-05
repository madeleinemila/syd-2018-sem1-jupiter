const PatientFeedbackPage = require('../../src/js/pages/patientFeedbackPage');

describe('The Patient Feedback Page', () => {

    describe('#template', () => {
        it('should contain "How are you feeling today?"', () => {
            const page = new PatientFeedbackPage();
            expect(page.template()).toContain('How are you feeling today?');
        });
        it('should contain a homepage icon', () => {
            const page = new PatientFeedbackPage();
            expect(page.template()).toContain('homeIcon fas fa-home fa-2x');
        });
    });

    describe('#topButtonEvent', () => {
        it('goes back to homepage', () => {
            const props = {
                navigate: () => { },
            };
            const page = new PatientFeedbackPage(props);
            spyOn(page, 'navigate');
            page.topButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('patienthome');
        });
    });
    
    describe('#leftButtonEvent', () => {
        it('goes to Feedback Confirmation', () => {
            const props = {
                navigate: () => { },
            };
            const page = new PatientFeedbackPage(props);
            spyOn(page, 'navigate');
            page.leftButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('patientfeedbackconfirmation');
        });
    });

	describe('#rightButtonEvent', () => {
        it('goes to Feedback Confirmation', () => {
            const props = {
                navigate: () => { },
            };
            const page = new PatientFeedbackPage(props);
            spyOn(page, 'navigate');
            page.rightButtonEvent();
            expect(page.navigate).toHaveBeenCalledWith('patientfeedbackconfirmation');
        });
    });
    
});