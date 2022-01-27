<script>
import { computed, defineComponent, h } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: {
    id: {
      type: [Number, null],
      required: true
    },
    transformer: {
      type: Function,
      default: (rawData) => rawData
    }
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    if (!slots.default) return () => '空的';

    const store = useStore();

    const rawData = computed(() => store.state.components.get(props.id) ?? null);

    const data = computed(() => props.transformer(rawData.value));

    const emitClickWrapper = (cb) =>
      (e) => {
        emit('click', e);
        if (cb) cb(e);
      };

    return () =>
      slots.default({ data: data.value })
        .map(
          comp => h(
            comp.type,
            {
              ...comp.props,
              onClick: emitClickWrapper(comp.props.onClick)
            },
            comp.children
          )
        );
  }
});
</script>
