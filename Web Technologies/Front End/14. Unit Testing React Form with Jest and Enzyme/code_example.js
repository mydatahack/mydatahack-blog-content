
// (1) Unit Testing text input
<pre class=" toolbar:2 lang:js decode:true" >
it('Should capture firstname correctly onChange', function(){
    const component = mount(<Form />);
    const input = component.find('input').at(0);
    input.instance().value = 'hello';
    input.simulate('change');
    expect(component.state().firstname).toEqual('hello');
})
</pre>

// (2) Testing Checkbox
<pre class=" toolbar:2 lang:js decode:true" >
it('Should capture checkbox ticked correctly onChange', function(){
    const component = mount(<Form />);
    const input = component.find('input').at(3);
    input.instance().checked = true;
    input.simulate('change');
    expect(component.state().subscribed).toEqual(true);
})
</pre>

// (3) Testing MultiSelect

//This Works
<pre class=" toolbar:2 lang:js decode:true" >
const component = mount(<Form />);
const input = component.find('select').at(0);
const optionEnglish = component.find('option').at(0);
optionEnglish.instance().selected = true;
const optionGerman = component.find('option').at(3);
optionGerman.instance().selected = true;
input.simulate('change')
expect(component.find('select').at(0).props().value).toEqual(['English', 'German']);
</pre>

// This does not work
<pre class=" toolbar:2 lang:js decode:true" >
input.simulate('change', {target: {selectedOptions: ['Japanese', 'French']}});  
input.instance().value = ['Japanese', 'French'];
input.simulate('select', {target: input.instance()});
</pre>

// (4) Testing Alert Function
<pre class=" toolbar:2 lang:js decode:true" >
const state = {firstname:'hello', lastname:'world'}
const expectedArg = "Firstname: hello, Lastname: world";
const component = mount(<Form />);
window.alert = jest.fn();
component.setState(state)
component.find('form').simulate('submit')
expect(window.alert).toHaveBeenCalledWith(expectedArg);
</pre>