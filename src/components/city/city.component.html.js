export default (city) => {

return `
${
    !city.get("name") // si exception
  ? `<div id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="position: absolute; top: 0; z-index: 9; width: 100%;;"></div>` 
  : ""
}

<h4 class="ui grey-50 col-12 center mdl-layout-title">
<br>

<span class="ui smaller icon material-icons">room</span> 

${
    city.get("name") ? city.get("name") : "----" // si pas de choix game
}

${
    city.get("name") && ! "-" == city    // si acceptation
}





</h4>
<div class="mdl-layout__drawer" aria-hidden="true">
<span class="ui center mdl-layout-title">Location</span>
<nav class="mdl-navigation">
    <a class="mdl-navigation__link" href=""><span class="icon material-icons">room</span> Lyon</a>
    <a class="mdl-navigation__link" href=""><span class="icon material-icons">room</span> Saint-Étienne</a>
    <form action="#">
        <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable has-placeholder is-upgraded" data-upgraded=",MaterialTextfield">
            <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" id="sample6" placeholder="Location" type="text">
                <label class="mdl-textfield__label" for="sample-expandable">Expandable Input</label>
            </div>
        </div>
    </form>
    <label class="mdl-button mdl-js-button mdl-button--icon mdl-button--fab mdl-button--colored" for="sample6" data-upgraded=",MaterialButton">
        <i class="material-icons">add</i>
    </label>
</nav>
</div>
<div aria-expanded="false" role="button" tabindex="0" class="mdl-layout__drawer-button"><i class="material-icons"></i></div><div class="mdl-layout__obfuscator"></div>


`;

}