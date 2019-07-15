import MainStructure from '../../../components/structure/mainStructure';
import frames1 from '../../../components/templates/frames.template';
import layers1 from '../../../components/templates/layers.template';
import tools1 from '../../../components/templates/tools.template';
import preview1 from '../../../components/preview/preview.template';

describe('Frames.addFrame', () => {
  it('test-1', () => {
    MainStructure.render();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it('test-2', () => {
    frames1();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it('test-3', () => {
    layers1();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it('test-4', () => {
    tools1();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
  it('test-5', () => {
    preview1();
    expect(document.body.innerHTML).toMatchSnapshot();
  });
});
