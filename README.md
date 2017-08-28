ng-sticky-footer
=================

Sticky Footer

<h4>Installing</h4>

```
bower install git@git__XXX__.git#x.x.x
```

```javascript
angular('yourAngularApp',['ngStickyFooter']);
```

<h4>Usage/Example</h4>
Example with Sticky only if body content is smaller than window heigh

```html
<div class="body">
        <div class="body-content">
            <ul class="list-group">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">END</li>
            </ul>
        </div>
    </div>
</div>
<div class="footer" sticky-footer="body" sticky-footer-content="body-content" sticky-footer-if="false" >
    <h3>Footer</h3>
</div>
```

<h4>Usage/Example</h4>
Example with Sticky always

```html
<div class="body">
    <div class="body-content">
        <ul class="list-group">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">END</li>
        </ul>
    </div>
</div>
<div class="footer" sticky-footer="body" sticky-footer-if="true" >
    <h3>Footer</h3>
</div>
```
