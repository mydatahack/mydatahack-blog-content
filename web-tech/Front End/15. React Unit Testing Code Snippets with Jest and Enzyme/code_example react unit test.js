
// (1) Snapshot Testing
<pre class=" toolbar:2 lang:js decode:true" >
test('Should render correctly', () => {

    const component = renderer.create(<Header />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();

})
</pre>

// (2) Checking DOM element
<pre class=" toolbar:2 lang:js decode:true" >
it('Should have single <button> when href prop exists', function () {

    const component = shallow(<Button />);
    expect(component.find('button').length).toBe(1);

});
</pre>

// (3) Checking class

<pre class=" toolbar:2 lang:js decode:true" >
it('should have the correct class name', function () {

    const component = shallow(<Column className="col-md-6" />);
    expect(component.find('div').hasClass('col-md-6')).toBe(true);

})
</pre>


// (4) Simulate button click
<pre class=" toolbar:2 lang:js decode:true" >
test('Should change button style when clicked', function() {

    const component = mount(<ChangeColor />);
    const firstButton = component.find('button').at(0);
    firstButton.simulate('click');
    expect(component.find('button').at(0).hasClass('btn btn-danger')).toBe(true);

})
</pre>

// (5) Checking the text in DOM element
<pre class=" toolbar:2 lang:js decode:true" >
it('Should have <label> with default label title', function(){

    const component = shallow(<TextInput />);
    expect(component.find('label').text()).toEqual('Text Input');

});
</pre>

// (6) Checking if function called once
<pre class=" toolbar:2 lang:js decode:true" >
test('Should call onclick function when the button is clicked', () => {

    const onClick = jest.fn();
    const component = mount(<ButtonGroup array={array} clickHandler={onClick}/>);
    component.find('button').at(0).simulate('click');

    expect(onClick.mock.calls.length).toBe(1);
})
</pre>

// (7) Checking if function called with a specific argument
<pre class=" toolbar:2 lang:js decode:true" >
test('Should call onclick function when the button is clicked with the correct id number', () => {

    const onClick = jest.fn();
    const component = mount(<ButtonGroup array={array} clickHandler={onClick}/>);
    component.find('button').at(0).simulate('click');

    expect(onClick).toHaveBeenCalledWith(1);
})
</pre>
