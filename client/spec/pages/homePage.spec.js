const HomePage = require('../../src/js/pages/homePage');

describe('HomePage', () => {
  const props = {
    localStorage: {
      getItem: () => { },
      setItem: () => { },
    },
  };

  let watchFace;
  beforeEach(() => {
    document.body.innerHTML = `<div id="button-left" /><div id='watch-face' style='height: 100px; width: 100px;'></div>`;
    watchFace = document.getElementById('watch-face');
  });

  describe('#template', () => {
    it('should have a template', () => {
      const page = new HomePage(props);
      expect(page.template()).toContain("Date:");
    });
  });

  describe('#rightIcon', () => {
    it('should have right icon', () => {
      const page = new HomePage(props);
      expect(page.template()).toContain('<img class="rightIcon2" src="../images/patient.png" >');
    })
  })

  describe('#rightButtonEvent', () => {
    it('goes to nextpatient page', () => {
      const props = {
        navigate: () => { },
        localStorage: {
          getItem: () => 'blah',
          setItem: () => { },
        },
      };
      const page = new HomePage(props);
      spyOn(page, 'navigate');

      page.rightButtonEvent();
      expect(page.navigate).toHaveBeenCalledWith('nextpatient');
    });
  });

  describe('#bottomButtonEvent', () => {
    it('scrolls page down', () => {

      const page = new HomePage({ 
        watchFace,
        localStorage: props.localStorage,
      });

      page.bottomButtonEvent();

      expect(watchFace.scrollTop).toEqual(40);

    });
  });

  describe('#topButtonEvent', () => {
    it('scrolls page up', () => {
      const page = new HomePage({ 
        watchFace,
        localStorage: props.localStorage,
      });

      page.topButtonEvent();

      expect(watchFace.scrollTop).toEqual(-40);
    });
  });

  describe('#emergencyIcon', () => {
    it('should have emergency icon', () => {
      const page = new HomePage(props);
      expect(page.template()).toContain('fa-ambulance');
    })
  })

  describe('long press event', () => {
    it('should get the left button', () => {
      const page = new HomePage(props);

      expect(page.leftButton).toEqual(document.body.firstChild);
    });
    it('should have a hold time of 1000ms', () => {
      const page = new HomePage(props);

      expect(page.holdTime).toEqual(1000);
    });
    it('should have a an initial leftButtonDown value of 0', () => {
      const page = new HomePage(props);

      expect(page.leftButtonDown).toEqual(0);
    });
  });
});
